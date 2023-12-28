import { createCamera } from "./components/camera.js";
import { Train } from "./components/Train/Train.js";
import { createScene } from "./components/scene.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { createLight } from "./components/light.js";
import { createControls } from "./systems/control.js";
import { Loop } from "./systems/loop.js";
import { AxesHelper } from "../../vendor/three/build/three.module.js";
class World {
  #camera;
  #scene;
  #renderer;
  #loop;
  #obj;
  constructor(container) {
    this.#obj = {
      move: false,
    };
    const train = new Train();
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    const { light, ambientLight, hemisphereLight } = createLight();
    const axesHelper = new AxesHelper(5);
    this.#scene.add(train, light, hemisphereLight);
    this.#scene.add(axesHelper);
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    this.#loop.updateables.push(train);
    this.initResize(container);
    this.constrol(train);
    container.append(this.#renderer.domElement);
  }
  init() {}
  start() {
    this.#loop.start();
  }
  stop() {
    this.#loop.stop();
  }
  move() {
    this.#obj.move = true;
  }
  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }
  initResize(container) {
    // 自适应
    const resizer = new Resizer(this.#camera, this.#renderer, container);
    resizer.onResize = () => {
      this.render();
    };
  }
  constrol(mesh) {
    // // 相机控制插件
    const controls = createControls(
      this.#camera,
      this.#renderer.domElement,
      mesh,
      this.#obj
    );
    // this.#loop.updateables.push(controls);
    controls.addEventListener("change", () => {
      this.render();
    });
  }
}

export { World };
