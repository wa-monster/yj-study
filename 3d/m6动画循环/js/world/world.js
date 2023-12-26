import { createCamera } from "../components/camera.js";
import { createCube } from "../components/cube.js";
import { createScene } from "../components/scene.js";
import { createRenderer } from "../systems/renderer.js";
import { Resizer } from "../systems/Resizer.js";
import { createLight } from "../components/light.js";
import { MathUtils } from "../../../vendor/three/build/three.module.js";
import { Loop } from "../systems/loop.js";
class World {
  #camera;
  #scene;
  #renderer;
  #loop;
  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    const cube = createCube();
    const light = createLight();
    const light2 = createLight();
    this.#scene.add(cube, light, light2);
    // 自适应
    const resizer = new Resizer(this.#camera, this.#renderer, container);
    // 循环
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    this.#loop.updateables.push(cube);
    this.#loop.updateables.push(light);
    // this.#loop.updateables.push(this.#camera);
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
  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }
}

export { World };
