import { createCamera } from "../components/camera.js";
import { createCube } from "../components/cube.js";
import { createScene } from "../components/scene.js";
import { createRenderer } from "../systems/renderer.js";
import { Resizer } from "../systems/Resizer.js";
import { createLight } from "../components/light.js";
class World {
  #camera;
  #scene;
  #renderer;
  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    const cube = createCube();
    const light = createLight();
    const light2 = createLight();
    this.#scene.add(cube, light, light2);

    const resizer = new Resizer(this.#camera, this.#renderer, container);

    container.append(this.#renderer.domElement);
  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }
}

export { World };
