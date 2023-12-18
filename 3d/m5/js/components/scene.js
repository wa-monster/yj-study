import { Scene, Color } from "../../../vendor/three/build/three.module.js";

function createScene() {
  const instance = new Scene();
  instance.background = new Color("red");
  return instance;
}
export { createScene };
