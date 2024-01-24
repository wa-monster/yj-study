import { createCamera } from "../components/camera.js";
import { createCube } from "../components/cube.js";
import { createScene } from "../components/scene.js";
import { createLight } from "../components/light.js";
import { createRenderer } from "../systems/renderer.js";
import { Resizer } from "../systems/Resizer.js";
import { createControls } from "../systems/control.js";
import { Loop } from "../systems/loop.js";
import { loadBirds } from "../components/birds/birds.js";
import {
  AxesHelper,
  Vector3,
  AnimationClip,
  VectorKeyframeTrack,
  AnimationMixer,
  NumberKeyframeTrack,
} from "../../../vendor/three/build/three.module.js";
import { OrbitControls } from "../../../vendor/three/examples/jsm/controls/OrbitControls.js";
let controls;
let parrotMesh;
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
    const { light, ambientLight, hemisphereLight } = createLight();
    const axesHelper = new AxesHelper(25);
    this.#scene.add(hemisphereLight);
    this.#scene.add(axesHelper);
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    // this.#loop.updateables.push(group);
    // 相机控制插件
    controls = new OrbitControls(this.#camera, this.#renderer.domElement);
    // 自适应
    const resizer = new Resizer(this.#camera, this.#renderer, container);
    container.append(this.#renderer.domElement);
  }
  async init() {
    const { parrot, flamingo, stork } = await loadBirds();
    parrotMesh = parrot;
    controls.target.copy(parrot.position);
    controls.update();
    this.#loop.updateables.push(parrot, flamingo, stork);
    this.#scene.add(parrot, flamingo, stork);

    // this.abc();
  }
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
}

export { World };
