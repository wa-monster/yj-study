import { WebGLRenderer } from "../../vendor/three/build/three.module.js";

function createRenderer() {
  const instance = new WebGLRenderer();
  return instance;
}

export { createRenderer };
