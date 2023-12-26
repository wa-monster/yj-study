import {
  Mesh,
  BoxBufferGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "../../../vendor/three/build/three.module.js";
import { MathUtils } from "../../../vendor/three/build/three.module.js";
function calc(a, b, type) {
  if (type === "+") {
    return a + b;
  } else {
    return a - b;
  }
}
function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const spec = {
    colort: "purple",
  };
  const material = new MeshStandardMaterial(spec);
  // const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material);

  const degSeconds = MathUtils.degToRad(30);
  const scaleSeconds = 1;
  let calcType = "+";
  cube.tick = function (delta) {
    cube.rotation.x += degSeconds * delta;
    // cube.rotation.y += degSeconds * delta;
    // cube.rotation.z += degSeconds * delta;
    // cube.scale.x = cube.scale.x - scaleSeconds * delta;
    if (cube.scale.x < 0.01) {
      calcType = "+";
    } else if (cube.scale.x > 5) {
      calcType = "-";
    }
    cube.scale.x = calc(cube.scale.x, scaleSeconds * delta, calcType);
  };
  return cube;
}

export { createCube };
