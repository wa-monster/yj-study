import { WebGLRenderer } from "../../../vendor/three/build/three.module.js";

function createRenderer() {
  const instance = new WebGLRenderer({ antialias: true });
  instance.physicallyCorrectLights = true;
  return instance;
}

export { createRenderer };
