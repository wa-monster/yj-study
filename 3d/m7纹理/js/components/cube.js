import {
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
  TextureLoader,
} from "../../../vendor/three/build/three.module.js";
import { MathUtils } from "../../../vendor/three/build/three.module.js";
function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("/m7/assets/textures/uv-test-bw.png");
  const texture2 = textureLoader.load("/m7/assets/textures/uv-test-col.png");
  const material = new MeshStandardMaterial({
    map: texture2,
  });
  console.log("texture2", texture2);
  return material;
}
function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = createMaterial();
  const cube = new Mesh(geometry, material);
  const degSeconds = MathUtils.degToRad(30);
  cube.tick = function (delta) {
    cube.rotation.x += degSeconds * delta;
    cube.rotation.y += degSeconds * delta;
    cube.rotation.z += degSeconds * delta;
  };
  return cube;
}

export { createCube };
