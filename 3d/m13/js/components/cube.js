import {
  Mesh,
  BoxGeometry,
  MeshStandardMaterial,
} from "../../../vendor/three/build/three.module.js";

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshStandardMaterial({
    color: "purple",
  });
  const cube = new Mesh(geometry, material);
  return cube;
}

export { createCube };
