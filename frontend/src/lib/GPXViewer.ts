import * as THREE from 'three';

export class GPXViewer {
  private scene: THREE.Scene;
  private gpxLayer: THREE.Group;
  private color: THREE.Color;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.gpxLayer = new THREE.Group();
    this.scene.add(this.gpxLayer);
    this.color = new THREE.Color(0x00ffff); // cyan
  }

  async loadGPX(gpxUrl: string): Promise<void> {
    // Fetch and parse GPX file
    const response = await fetch(gpxUrl);
    const text = await response.text();
    const parser = new DOMParser();
    const gpxDoc = parser.parseFromString(text, 'text/xml');

    const points: THREE.Vector3[] = [];
    const trkpts = gpxDoc.getElementsByTagName('trkpt');

    for (let i = 0; i < trkpts.length; i++) {
      const lat = parseFloat(trkpts[i].getAttribute('lat') || '0');
      const lon = parseFloat(trkpts[i].getAttribute('lon') || '0');
      const ele = parseFloat(trkpts[i].getElementsByTagName('ele')[0]?.textContent || '0');

      // Convert lat/lon/ele to 3D coordinates (simple projection)
      const x = lon * 10000;
      const y = lat * 10000;
      const z = ele * 10;

      points.push(new THREE.Vector3(x, z, y));
    }

    if (points.length < 2) return;

    // Create line geometry
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: this.color });
    const line = new THREE.Line(geometry, material);
    this.gpxLayer.add(line);
  }

  clear(): void {
    this.gpxLayer.clear();
  }
}
