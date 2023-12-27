import { World } from "./world/world.js";

function main() {
  const container = document.querySelector("#scene-container");
  const startBtn = document.querySelector("#start");
  const stopBtn = document.querySelector("#stop");
  const moveBtn = document.querySelector("#move");
  const world = new World(container);
  world.start();
  startBtn.onclick = function () {
    world.start();
    // world.render();
  };
  stopBtn.onclick = function () {
    world.stop();
  };
  moveBtn.onclick = function () {
    world.move();
  };
}
main();
