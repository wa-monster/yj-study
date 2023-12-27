import {
  Mesh,
  BoxGeometry,
  SphereBufferGeometry,
  MeshStandardMaterial,
  TextureLoader,
  MathUtils,
} from "../../../vendor/three/build/three.module.js";
import { Group } from "../../../vendor/three/build/three.module.js";

function createCube() {
  // const geometry = new SphereBufferGeometry(0.25, 50, 50);
  const geometry = new BoxGeometry(0.25, 0.25, 0.25);
  const material = new MeshStandardMaterial({
    color: "indigo",
  });
  const sphereCube = new Mesh(geometry, material);
  sphereCube.position.set(0, 0, 0);
  const group = new Group();
  group.add(sphereCube);
  for (let i = 0; i < 1; i = i + 0.01) {
    let sphere = sphereCube.clone();
    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.y = Math.sin(2 * Math.PI * i);
    sphere.position.z = i * 5;
    sphere.scale.multiplyScalar(0.01 + i);
    group.add(sphere);
  }
  group.scale.multiplyScalar(2);

  const rotationSecond = MathUtils.degToRad(30);
  group.tick = function (delta) {
    group.rotation.z -= delta * rotationSecond;
  };
  return group;
}

export { createCube };
