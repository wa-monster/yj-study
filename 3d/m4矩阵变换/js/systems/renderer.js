import { WebGLRenderer } from "../../../vendor/three/build/three.module.js";

function createRenderer() {
  const instance = new WebGLRenderer();
  instance.physicallyCorrectLights = true;
  return instance;
}

export { createRenderer };
