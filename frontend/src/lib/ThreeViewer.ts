import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

type SceneMeta = {
  tile_id: string;
  vertex_count: number;
  index_count: number;
  index_dtype?: string;
  has_snow_surface?: boolean;
  elevation_models?: Record<string, string>;
  textures: Record<string, string>;
  files: {
    positions: string;
    uvs: string;
    indices: string;
  };
  tracks_file?: string;
};

export type ViewerLoadOptions = {
  textureMode?: 'winter' | 'summer';
  elevationModel?: 'snow_surface' | 'base';
  elevationFactor?: number;
  onProgress?: (stage: string, progress: number) => void;
};

export class TerrainViewer {
  private container: HTMLElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;
  private terrainMesh: THREE.Mesh | null = null;
  private heightModels: Record<string, Float32Array | null> | null = null;
  private activeElevationModel = 'base';
  private sceneMeta: SceneMeta | null = null;
  private animationId: number | null = null;
  private resizeObserver: ResizeObserver;

  constructor(container: HTMLElement) {
    this.container = container;

    const canvas = document.createElement('canvas');
    canvas.style.position = 'relative';
    canvas.style.zIndex = '0';
    container.appendChild(canvas);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x4aa8e8);

    this.camera = new THREE.PerspectiveCamera(50, 1, 0.5, 50000);
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.maxPolarAngle = Math.PI / 2.02;
    this.controls.minDistance = 20;
    this.controls.maxDistance = 12000;

    const hemisphereLight = new THREE.HemisphereLight(0x4aa3e8, 0xd8e8f5, 0.62);
    this.scene.add(hemisphereLight);

    const ambientLight = new THREE.AmbientLight(0xc8ddf5, 0.12);
    this.scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff6e8, 2.6);
    sunLight.position.set(2000, 3000, 1500);
    this.scene.add(sunLight);

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
    this.resize();
    this.animate();

    this.controls.addEventListener('change', () => this.render());
  }

  async load(sceneUrl: string, options: ViewerLoadOptions = {}): Promise<string> {
    this.disposeTerrain();
    const report = options.onProgress;
    const step = (label: string, progress: number) => report?.(label, progress);

    step('Lade Szenen-Metadaten…', 0.05);
    await this.yieldFrame();

    const base = sceneUrl.replace(/\/scene\.json$/, '');
    const metaResponse = await fetch(sceneUrl);
    if (!metaResponse.ok) {
      throw new Error(`Scene not found: ${sceneUrl}`);
    }

    this.sceneMeta = (await metaResponse.json()) as SceneMeta;
    step('Bereite Geometrie vor…', 0.12);
    await this.yieldFrame();

    const requestedModel = options.elevationModel ?? 'snow_surface';
    this.activeElevationModel =
      requestedModel === 'snow_surface' && this.sceneMeta.has_snow_surface ? 'snow_surface' : 'base';

    const positionsBuf = await this.loadBinary(`${base}/${this.sceneMeta.files.positions}`);
    step('Lade Vertex-Positionen…', 0.22);

    const uvsBuf = await this.loadBinary(`${base}/${this.sceneMeta.files.uvs}`);
    step('Lade Texturkoordinaten…', 0.32);

    const indicesBuf = await this.loadBinary(`${base}/${this.sceneMeta.files.indices}`);
    step('Lade Mesh-Indizes…', 0.42);

    const winterTexture = await this.loadTexture(`${base}/${this.sceneMeta.textures.winter}`);
    step('Lade Winter-Orthofoto…', 0.58);

    let summerTexture: THREE.Texture | null = null;
    if (this.sceneMeta.textures.summer) {
      try {
        summerTexture = await this.loadTexture(`${base}/${this.sceneMeta.textures.summer}`);
        step('Lade Sommer-Orthofoto…', 0.68);
      } catch {
        summerTexture = null;
      }
    }

    this.heightModels = await this.loadElevationModels(base, this.sceneMeta);
    step('Lade Höhenmodelle…', 0.82);
    await this.yieldFrame();
    step('Erzeuge 3D-Mesh…', 0.9);

    const positions = new Float32Array(positionsBuf);
    const uvs = new Float32Array(uvsBuf);
    const IndexArray = this.sceneMeta.index_dtype === 'uint16' ? Uint16Array : Uint32Array;
    const rawIndices = new IndexArray(indicesBuf);
    const indices = new Uint32Array(rawIndices.length);
    for (let i = 0; i < rawIndices.length; i++) {
      indices[i] = rawIndices[i];
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geometry.setIndex(new THREE.Uint32BufferAttribute(indices, 1));
    geometry.computeVertexNormals();
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();

    const material = this.createTerrainMaterial(
      options.textureMode ?? 'winter',
      winterTexture,
      summerTexture,
    );
    this.terrainMesh = new THREE.Mesh(geometry, material);
    this.terrainMesh.frustumCulled = false;
    this.scene.add(this.terrainMesh);

    this.applyExaggeration(options.elevationFactor ?? 1.0);
    this.frameCamera(this.terrainMesh);
    step('Szene geladen', 1);

    const triangles = Math.floor(this.sceneMeta.index_count / 3).toLocaleString();
    const vertices = this.sceneMeta.vertex_count.toLocaleString();
    return `${this.sceneMeta.tile_id} · ${vertices} vertices · ${triangles} triangles`;
  }

  dispose(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.resizeObserver.disconnect();
    this.disposeTerrain();
    this.controls.dispose();
    this.renderer.dispose();
    this.container.replaceChildren();
  }

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    this.controls.update();
    this.render();
  };

  private render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  private resize(): void {
    const width = Math.max(this.container.clientWidth, 1);
    const height = Math.max(this.container.clientHeight, 1);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.render();
  }

  private yieldFrame(): Promise<void> {
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
  }

  private async loadBinary(url: string): Promise<ArrayBuffer> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`File not found: ${url}`);
    }
    return response.arrayBuffer();
  }

  private async loadTexture(url: string): Promise<THREE.Texture> {
    const loader = new THREE.TextureLoader();
    const texture = await loader.loadAsync(url);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = true;
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    return texture;
  }

  private createTerrainMaterial(
    textureMode: 'winter' | 'summer',
    winterTexture: THREE.Texture,
    summerTexture: THREE.Texture | null,
  ): THREE.MeshStandardMaterial {
    const map = textureMode === 'summer' && summerTexture ? summerTexture : winterTexture;
    return new THREE.MeshStandardMaterial({
      map,
      roughness: 0.92,
      metalness: 0.0,
      side: THREE.DoubleSide,
      toneMapped: true,
    });
  }

  private extractHeights(positions: Float32Array): Float32Array {
    const heights = new Float32Array(positions.length / 3);
    for (let vi = 0; vi < heights.length; vi++) {
      heights[vi] = positions[vi * 3 + 1];
    }
    return heights;
  }

  private async loadElevationModels(
    base: string,
    meta: SceneMeta,
  ): Promise<Record<string, Float32Array | null>> {
    const models: Record<string, Float32Array | null> = {
      base: null,
      snow_surface: null,
    };

    const baseBuf = await this.loadBinary(`${base}/${meta.files.positions}`);
    models.base = this.extractHeights(new Float32Array(baseBuf));

    const snowFile = meta.elevation_models?.snow_surface;
    if (snowFile) {
      try {
        const snowBuf = await this.loadBinary(`${base}/${snowFile}`);
        models.snow_surface = this.extractHeights(new Float32Array(snowBuf));
      } catch {
        models.snow_surface = null;
      }
    }

    return models;
  }

  private currentHeights(): Float32Array | null {
    if (!this.heightModels) return null;
    return this.heightModels[this.activeElevationModel] || this.heightModels.base;
  }

  private applyExaggeration(factor: number): void {
    if (!this.terrainMesh) return;
    const heights = this.currentHeights();
    if (!heights) return;

    const positions = this.terrainMesh.geometry.attributes.position.array as Float32Array;
    for (let vi = 0; vi < heights.length; vi++) {
      positions[vi * 3 + 1] = heights[vi] * factor;
    }
    this.terrainMesh.geometry.attributes.position.needsUpdate = true;
    this.terrainMesh.geometry.computeVertexNormals();
    this.terrainMesh.geometry.computeBoundingBox();
    this.terrainMesh.geometry.computeBoundingSphere();
  }

  private frameCamera(mesh: THREE.Mesh): void {
    const box = new THREE.Box3().setFromObject(mesh);
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    this.controls.target.copy(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    this.camera.near = Math.max(maxDim / 5000, 0.5);
    this.camera.far = maxDim * 20;
    this.camera.updateProjectionMatrix();

    this.camera.position.set(
      center.x + maxDim * 0.55,
      center.y + maxDim * 0.45,
      center.z + maxDim * 0.65,
    );
    this.controls.update();
    this.render();
  }

  private disposeTerrain(): void {
    if (!this.terrainMesh) return;
    this.scene.remove(this.terrainMesh);
    this.terrainMesh.geometry.dispose();
    this.terrainMesh.material.map?.dispose();
    if (this.terrainMesh.material instanceof THREE.Material) {
      this.terrainMesh.material.dispose();
    }
    this.terrainMesh = null;
    this.heightModels = null;
    this.sceneMeta = null;
  }
}
