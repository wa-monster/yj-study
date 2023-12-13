import { createCamera } from "../components/camera.js";
import { createCube } from "../components/cube.js";
import { createScene } from "../components/scene.js";
import { createRenderer } from "../systems/renderer.js";
import { Resizer } from "../systems/Resizer.js";

class World {
  #camera;
  #scene;
  #renderer;
  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    const cube = createCube();
    this.#scene.add(cube);
    const resizer = new Resizer(this.#camera, this.#renderer, container);

    container.append(this.#renderer.domElement);
  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }
}

export { World };
