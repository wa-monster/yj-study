import { createCamera } from "../components/camera.js";
import { createCube } from "../components/cube.js";
import { createScene } from "../components/scene.js";
import { createRenderer } from "../systems/renderer.js";
import { Resizer } from "../systems/Resizer.js";
import { createLight } from "../components/light.js";
import { MathUtils } from "../../../vendor/three/build/three.module.js";
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
    const cube = createCube();
    const light = createLight();
    const light2 = createLight();
    this.#scene.add(cube, light, light2);
    // 自适应
    const resizer = new Resizer(this.#camera, this.#renderer, container);
    // 循环
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    this.#loop.updateables.push(cube);
    // this.#loop.updateables.push(light);
    // this.#loop.updateables.push(this.#camera);
    const controls = createControls(
      this.#camera,
      this.#renderer.domElement,
      cube,
      this.#obj
    );
    controls.minDistance = 10;
    controls.maxDistance = 100;
    // controls.enablePan = false;
    // controls.enableRotate = false;
    // controls.enableZoom = false;
    this.#loop.updateables.push(controls);
    container.append(this.#renderer.domElement);
    controls.addEventListener("change", () => {
      this.#renderer.render(this.#scene, this.#camera);
    });
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
