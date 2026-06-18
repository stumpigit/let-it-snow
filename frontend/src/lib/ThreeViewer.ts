import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

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
  track_count?: number;
};

type TrackSource = {
  x: Float32Array;
  heights: Float32Array;
  z: Float32Array;
  snowHeights: Float32Array | null;
};

export type ViewerLoadOptions = {
  textureMode?: 'winter' | 'summer';
  elevationModel?: 'snow_surface' | 'base';
  elevationFactor?: number;
  onProgress?: (stage: string, progress: number) => void;
};

const binaryCache = new Map<string, Promise<ArrayBuffer>>();
const textureCache = new Map<string, Promise<THREE.Texture>>();

function fetchBinary(url: string): Promise<ArrayBuffer> {
  let cached = binaryCache.get(url);
  if (!cached) {
    cached = fetch(url).then((response) => {
      if (!response.ok) {
        binaryCache.delete(url);
        throw new Error(`File not found: ${url}`);
      }
      return response.arrayBuffer();
    });
    binaryCache.set(url, cached);
  }
  return cached;
}

function fetchTexture(url: string, renderer: THREE.WebGLRenderer): Promise<THREE.Texture> {
  let cached = textureCache.get(url);
  if (!cached) {
    const loader = new THREE.TextureLoader();
    cached = loader.loadAsync(url).then((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.flipY = true;
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return texture;
    }).catch((error) => {
      textureCache.delete(url);
      throw error;
    });
    textureCache.set(url, cached);
  }
  return cached;
}

export class TerrainViewer {
  private container: HTMLElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;
  private terrainMesh: THREE.Mesh | null = null;
  private trackLines: Line2[] = [];
  private trackSources: TrackSource[] = [];
  private heightModels: Record<string, Float32Array | null> | null = null;
  private activeElevationModel = 'base';
  private sceneMeta: SceneMeta | null = null;
  private loadedSceneUrl: string | null = null;
  private winterTexture: THREE.Texture | null = null;
  private summerTexture: THREE.Texture | null = null;
  private currentTextureMode: 'winter' | 'summer' = 'winter';
  private currentElevationFactor = 1.0;
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

  async loadScene(sceneUrl: string, options: ViewerLoadOptions = {}): Promise<string> {
    if (this.loadedSceneUrl === sceneUrl && this.terrainMesh) {
      return this.updateOptions(options);
    }

    this.disposeTerrain();
    const report = options.onProgress;
    const step = (label: string, progress: number) => report?.(label, progress);

    step('Lade Szenen-Metadaten…', 0.05);
    await this.yieldFrame();

    const base = sceneUrl.replace(/\/scene\.json(?:\?.*)?$/, '');
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

    const positionsBuf = await fetchBinary(`${base}/${this.sceneMeta.files.positions}`);
    step('Lade Vertex-Positionen…', 0.22);

    const uvsBuf = await fetchBinary(`${base}/${this.sceneMeta.files.uvs}`);
    step('Lade Texturkoordinaten…', 0.32);

    const indicesBuf = await fetchBinary(`${base}/${this.sceneMeta.files.indices}`);
    step('Lade Mesh-Indizes…', 0.42);

    this.winterTexture = await fetchTexture(`${base}/${this.sceneMeta.textures.winter}`, this.renderer);
    step('Lade Winter-Orthofoto…', 0.58);

    this.summerTexture = null;
    if (this.sceneMeta.textures.summer) {
      try {
        this.summerTexture = await fetchTexture(`${base}/${this.sceneMeta.textures.summer}`, this.renderer);
        step('Lade Sommer-Orthofoto…', 0.68);
      } catch {
        this.summerTexture = null;
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

    this.currentTextureMode = options.textureMode ?? 'winter';
    this.currentElevationFactor = options.elevationFactor ?? 1.0;

    const material = this.createTerrainMaterial(
      this.currentTextureMode,
      this.winterTexture,
      this.summerTexture,
    );
    this.terrainMesh = new THREE.Mesh(geometry, material);
    this.terrainMesh.frustumCulled = false;
    this.scene.add(this.terrainMesh);

    this.applyExaggeration(this.currentElevationFactor);

    step('Lade GPX-Tracks…', 0.94);
    await this.loadTracks(base, this.sceneMeta, this.activeElevationModel, this.currentElevationFactor);
    this.frameCamera(this.terrainMesh);
    step('Szene geladen', 1);

    this.loadedSceneUrl = sceneUrl;

    return this.statusMessage();
  }

  updateOptions(options: ViewerLoadOptions = {}): string {
    if (!this.terrainMesh || !this.sceneMeta) {
      throw new Error('Keine Szene geladen');
    }

    const textureMode = options.textureMode ?? this.currentTextureMode;
    const elevationModel = options.elevationModel ?? this.activeElevationModel;
    const elevationFactor = options.elevationFactor ?? this.currentElevationFactor;

    if (textureMode !== this.currentTextureMode) {
      this.setTextureMode(textureMode);
    }

    const resolvedModel =
      elevationModel === 'snow_surface' && this.sceneMeta.has_snow_surface ? 'snow_surface' : 'base';
    if (resolvedModel !== this.activeElevationModel) {
      this.setElevationModel(resolvedModel);
    }

    if (elevationFactor !== this.currentElevationFactor) {
      this.currentElevationFactor = elevationFactor;
      this.applyExaggeration(elevationFactor);
    }

    this.render();
    return this.statusMessage();
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

  private statusMessage(): string {
    if (!this.sceneMeta) return 'Keine Szene geladen';
    const triangles = Math.floor(this.sceneMeta.index_count / 3).toLocaleString();
    const vertices = this.sceneMeta.vertex_count.toLocaleString();
    const trackCount = this.sceneMeta.track_count ?? this.trackLines.length;
    const trackLabel =
      trackCount > 0 ? ` · ${trackCount} GPX-Track${trackCount === 1 ? '' : 's'}` : '';
    return `${this.sceneMeta.tile_id} · ${vertices} vertices · ${triangles} triangles${trackLabel}`;
  }

  private setTextureMode(textureMode: 'winter' | 'summer'): void {
    if (!this.terrainMesh || !this.winterTexture) return;
    const map =
      textureMode === 'summer' && this.summerTexture ? this.summerTexture : this.winterTexture;
    const material = this.terrainMesh.material as THREE.MeshStandardMaterial;
    material.map = map;
    material.needsUpdate = true;
    this.currentTextureMode = textureMode;
  }

  private setElevationModel(model: 'snow_surface' | 'base'): void {
    if (!this.heightModels || model === this.activeElevationModel) return;
    this.activeElevationModel = model;
    this.applyExaggeration(this.currentElevationFactor);
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
    this.updateTrackLineResolution(width, height);
    this.render();
  }

  private updateTrackLineResolution(width: number, height: number): void {
    const resolution = new THREE.Vector2(width, height);
    for (const line of this.trackLines) {
      const material = line.material as LineMaterial;
      material.resolution.copy(resolution);
    }
  }

  private yieldFrame(): Promise<void> {
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
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

    const baseBuf = await fetchBinary(`${base}/${meta.files.positions}`);
    models.base = this.extractHeights(new Float32Array(baseBuf));

    const snowFile = meta.elevation_models?.snow_surface;
    if (snowFile) {
      try {
        const snowBuf = await fetchBinary(`${base}/${snowFile}`);
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
    this.updateTrackHeights(factor);
  }

  private trackHeightsForModel(source: TrackSource): Float32Array {
    if (this.activeElevationModel === 'snow_surface' && source.snowHeights) {
      return source.snowHeights;
    }
    return source.heights;
  }

  private trackPointsFromSource(source: TrackSource, factor: number): number[] {
    const heights = this.trackHeightsForModel(source);
    const points: number[] = [];
    for (let vi = 0; vi < heights.length; vi++) {
      points.push(source.x[vi], heights[vi] * factor, source.z[vi]);
    }
    return points;
  }

  private updateTrackHeights(factor: number): void {
    for (let ti = 0; ti < this.trackLines.length; ti++) {
      const source = this.trackSources[ti];
      if (!source) continue;
      const line = this.trackLines[ti];
      line.geometry.setPositions(this.trackPointsFromSource(source, factor));
      line.computeLineDistances();
    }
  }

  private async loadTracks(
    base: string,
    meta: SceneMeta,
    elevationModel: string,
    factor: number,
  ): Promise<void> {
    this.disposeTracks();
    if (!meta.tracks_file) return;

    const response = await fetch(`${base}/${meta.tracks_file}`);
    if (!response.ok) return;

    const payload = await response.json();
    const tracks = payload.tracks || [];
    if (!Array.isArray(tracks) || tracks.length === 0) return;

    this.activeElevationModel = elevationModel;

    for (const track of tracks) {
      const raw: number[] | undefined = track.positions;
      if (!raw || raw.length < 6) continue;

      const pointCount = raw.length / 3;
      const source: TrackSource = {
        x: new Float32Array(pointCount),
        heights: new Float32Array(pointCount),
        z: new Float32Array(pointCount),
        snowHeights: null,
      };
      for (let vi = 0; vi < pointCount; vi++) {
        source.x[vi] = raw[vi * 3];
        source.heights[vi] = raw[vi * 3 + 1];
        source.z[vi] = raw[vi * 3 + 2];
      }

      const snowRaw: number[] | undefined = track.snow_positions;
      if (snowRaw && snowRaw.length >= 6) {
        const snowCount = snowRaw.length / 3;
        source.snowHeights = new Float32Array(snowCount);
        for (let vi = 0; vi < snowCount; vi++) {
          source.snowHeights[vi] = snowRaw[vi * 3 + 1];
        }
      }

      this.trackSources.push(source);

      const geometry = new LineGeometry();
      geometry.setPositions(this.trackPointsFromSource(source, factor));
      const material = new LineMaterial({
        color: 0x2288ff,
        linewidth: 4,
        depthTest: true,
        depthWrite: false,
        transparent: true,
        opacity: 0.95,
        worldUnits: false,
      });
      material.resolution.set(
        Math.max(this.container.clientWidth, 1),
        Math.max(this.container.clientHeight, 1),
      );

      const line = new Line2(geometry, material);
      line.computeLineDistances();
      line.frustumCulled = false;
      line.renderOrder = 1;
      this.scene.add(line);
      this.trackLines.push(line);
    }
  }

  private disposeTracks(): void {
    for (const line of this.trackLines) {
      this.scene.remove(line);
      line.geometry.dispose();
      (line.material as LineMaterial).dispose();
    }
    this.trackLines = [];
    this.trackSources = [];
  }

  private frameCamera(mesh: THREE.Mesh): void {
    const box = new THREE.Box3().setFromObject(mesh);
    for (const line of this.trackLines) {
      box.expandByObject(line);
    }
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
    this.disposeTracks();
    if (!this.terrainMesh) {
      this.heightModels = null;
      this.sceneMeta = null;
      this.loadedSceneUrl = null;
      this.winterTexture = null;
      this.summerTexture = null;
      return;
    }

    this.scene.remove(this.terrainMesh);
    this.terrainMesh.geometry.dispose();
    if (this.terrainMesh.material instanceof THREE.Material) {
      this.terrainMesh.material.dispose();
    }
    this.terrainMesh = null;
    this.heightModels = null;
    this.sceneMeta = null;
    this.loadedSceneUrl = null;
    this.winterTexture = null;
    this.summerTexture = null;
  }
}
