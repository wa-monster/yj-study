import {
  DirectionalLight,
  PointLight,
  RectAreaLight,
  HemisphereLight,
  AmbientLight,
} from "../../../vendor/three/build/three.module.js";

import { MathUtils } from "../../../vendor/three/build/three.module.js";
function createLight() {
  // const light = new RectAreaLight(0xffffff, 2, 2, 2); //TODO
  // const light = new PointLight(0xff0000, 10, 100); //TODO
  const light = new DirectionalLight("white", 2); //TODO
  const ambientLight = new AmbientLight("white", 2);
  const hemisphereLight = new HemisphereLight("white", "gray", 5);
  light.position.set(3, 3, 10);
  // const
  light.tick = function (delta) {
    light.position.y += 1 * delta;
  };
  return { light, ambientLight, hemisphereLight };
}

export { createLight };
