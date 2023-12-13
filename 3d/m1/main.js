import {
  PerspectiveCamera,
  Color,
  Scene,
  BoxBufferGeometry,
  MeshBasicMaterial,
  Mesh,
  WebGLRenderer,
} from "./vendor/three/build/three.module.js";

import { OrbitControls } from "./vendor/three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "./vendor/three/examples/jsm/loaders/GLTFLoader.js";

const container = document.querySelector("#scene-container");
const scene = new Scene();
scene.background = new Color("skyblue");

const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;
const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10);

const geometry = new BoxBufferGeometry(2, 2, 2);
const material = new MeshBasicMaterial();
const cube = new Mesh(geometry, material);

scene.add(cube);
scene.add(camera);

const renderer = new WebGLRenderer();

renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.append(renderer.domElement);
renderer.render(scene, camera);

function abc() {
  var sel = window.getSelection();
  var str = sel.toString();
  var div1 = document.createElement("div");
  div1.innerHTML = "222222222";
  sel.selectAllChildren(div1);
}
