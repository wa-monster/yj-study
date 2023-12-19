import { createCamera } from "../components/camera.js";
import { createCube } from "../components/cube.js";
import { createScene } from "../components/scene.js";
import { createRenderer } from "../systems/renderer.js";
import { Resizer } from "../systems/Resizer.js";
import { createLight } from "../components/light.js";
import { MathUtils } from "../../../vendor/three/build/three.module.js";
class World {
  #camera;
  #scene;
  #renderer;
  logCubeMatrix(cube, ju) {
    const arr = [];
    cube[ju].elements.forEach((v, i) => {
      if (i % 4 === 0) {
        arr.push([]);
      }
      arr[arr.length - 1].push(v);
    });
    let arr1 = arr.map((v) => v.join(","));
    console.log("cube." + [ju] + ".arr", cube[ju], "\n" + arr1.join("\n"));
  }
  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    const cube = createCube();
    const light = createLight();
    const light2 = createLight();
    cube.position.set(0, 0, 10);
    cube.rotation.set(0, 0.5, 0.5);
    this.#scene.add(cube, light, light2);
    const resizer = new Resizer(this.#camera, this.#renderer, container);
    resizer.onResize = () => {
      this.render();
    };
    container.append(this.#renderer.domElement);
  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }
}

export { World };
