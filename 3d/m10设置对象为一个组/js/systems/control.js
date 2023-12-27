import { OrbitControls } from "../../../vendor/three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas, cube, obj) {
  const controls = new OrbitControls(camera, canvas);
  // controls.enablePan = false;
  controls.target.copy(cube.position);
  // controls.enableDamping = true;
  controls.tick = function () {
    if (obj.move) {
      controls.enabled = false;
      if (cube.position.x < 3 && cube.position.y < 6 && cube.position.z < 2) {
        cube.position.x += 0.01;
        cube.position.y += 0.01;
        cube.position.z += 0.01;
        controls.target.copy(cube.position);
      } else {
        obj.move = false;
      }
      console.log("cube.position.x", cube.position.x);
    }

    controls.update();
  };
  return controls;
}

export { createControls };
