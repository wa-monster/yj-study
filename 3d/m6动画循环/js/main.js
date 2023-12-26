import { World } from "./world/world.js";

function main() {
  const container = document.querySelector("#scene-container");
  const startBtn = document.querySelector("#start");
  const stopBtn = document.querySelector("#stop");
  const world = new World(container);

  startBtn.onclick = function () {
    world.start();
  };
  stopBtn.onclick = function () {
    world.stop();
  };
}
main();
