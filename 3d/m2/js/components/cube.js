import {
  Mesh,
  BoxBufferGeometry,
  MeshBasicMaterial,
} from "../../../vendor/three/build/three.module.js";

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material);
  return cube;
}

export { createCube };
