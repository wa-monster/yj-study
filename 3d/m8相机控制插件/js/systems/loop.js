import { Clock } from "../../../vendor/three/build/three.module.js";
const clock = new Clock();
class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updateables = [];
  }
  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();
      this.renderer.render(this.scene, this.camera);
    });
  }
  stop() {
    this.renderer.setAnimationLoop(null);
  }
  tick() {
    const delta = clock.getDelta();
    // console.log(`The last frame rendered in ${delta * 1000} milliseconds`);
    for (const obj of this.updateables) {
      obj.tick(delta);
    }
  }
}
export { Loop };
