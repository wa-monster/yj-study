import {
  Mesh,
  BoxBufferGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "../../../vendor/three/build/three.module.js";

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const spec = {
    colort: "purple",
  };
  const material = new MeshStandardMaterial(spec);
  // const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material);
  return cube;
}

export { createCube };
