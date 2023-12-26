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
    const cube2 = createCube();
    const light = createLight();
    const light2 = createLight();
    cube.add(cube2);
    // cube.position.set(0, 0, 0);
    // cube.scale.set(1, 1, 1);
    // cube.updateMatrix();
    // this.logCubeMatrix(cube);
    console.log("MathUtils.degToRad(30)", MathUtils.degToRad(30));
    cube.position.x = 9;
    cube2.position.x = 2;
    cube.updateMatrix();
    cube.updateMatrixWorld();
    this.logCubeMatrix(cube, "matrix");
    this.logCubeMatrix(cube, "matrixWorld");
    this.logCubeMatrix(cube2, "matrix");
    this.logCubeMatrix(cube2, "matrixWorld");
    // cube.rotation.z = MathUtils.degToRad(30);
    // cube.updateMatrix();
    // this.logCubeMatrix(cube);

    this.#scene.add(cube, light, light2);
    const resizer = new Resizer(this.#camera, this.#renderer, container);

    container.append(this.#renderer.domElement);
  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }
}

export { World };
