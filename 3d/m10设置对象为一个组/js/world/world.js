import { createCamera } from "../components/camera.js";
import { createCube } from "../components/meshGroup.js";
import { createScene } from "../components/scene.js";
import { createRenderer } from "../systems/renderer.js";
import { Resizer } from "../systems/Resizer.js";
import { createLight } from "../components/light.js";
import { createControls } from "../systems/control.js";
import { Loop } from "../systems/loop.js";
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
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    const group = createCube();
    const { light, ambientLight, hemisphereLight } = createLight();

    this.#scene.add(group, light, hemisphereLight);
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    this.#loop.updateables.push(group);
    // 自适应
    const resizer = new Resizer(this.#camera, this.#renderer, container);
    // 相机控制插件
    const controls = createControls(
      this.#camera,
      this.#renderer.domElement,
      group,
      this.#obj
    );
    container.append(this.#renderer.domElement);
  }
  init() {}
  start() {
    console.log("111111111111");
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
}

export { World };
