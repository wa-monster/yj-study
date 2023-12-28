import { OrbitControls } from "../../../vendor/three/examples/jsm/controls/OrbitControls.js";
import { MathUtils } from "../../../vendor/three/build/three.module.js";
const s30 = MathUtils.degToRad(30);
function createControls(camera, canvas, cube, obj) {
  const controls = new OrbitControls(camera, canvas);
  // controls.enablePan = false;
  controls.target.copy(cube.position);
  // controls.enableDamping = true;
  // let angle = 0;
  controls.tick = function (delta) {
    // angle += 0.01;
    // camera.position.x = 20 * Math.cos(angle);
    // camera.position.z = 20 * Math.sin(angle);
    // console.log("camera.rotation.x", camera.position.x);
    // console.log("camera.position.z", camera.position.z);
    // camera.rotation.y += s30 * delta;
    // console.log("camera.rotation.y", camera.rotation.y);
    controls.update();
    // camera.lookAt(0, 0, 0);
    // camera.updateProjectionMatrix();
  };
  return controls;
}

export { createControls };
