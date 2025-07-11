import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { ThreeElements } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: ThreeElements['mesh'] & {
        geometry?: MeshLineGeometry;
      };
      meshLineMaterial: ThreeElements['meshStandardMaterial'] & {
        material?: MeshLineMaterial;
      };
    }
  }
}
