export {};

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  import * as THREE from 'three';
  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints: (points: THREE.Vector3[] | number[]) => void;
  }

  export class MeshLineMaterial extends THREE.ShaderMaterial {
    lineWidth: number;
    color: THREE.Color;
    resolution: [number, number];
    dashArray?: number;
    dashRatio?: number;
    useMap?: boolean;
    map?: THREE.Texture;
    repeat?: [number, number];
  }
}

import { Node } from '@react-three/fiber';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: Node<MeshLineGeometry, typeof MeshLineGeometry>;
      meshLineMaterial: Node<MeshLineMaterial, typeof MeshLineMaterial>;
    }
  }
}
