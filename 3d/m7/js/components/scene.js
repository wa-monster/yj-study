import { Scene, Color } from "../../../vendor/three/build/three.module.js";

function createScene() {
  const instance = new Scene();
  instance.background = new Color("skyblue");
  return instance;
}
export { createScene };
