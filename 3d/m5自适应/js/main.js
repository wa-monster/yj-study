import { World } from "./world/world.js";

function main() {
  const container = document.querySelector("#scene-container");
  const world = new World(container);
  world.render();
}

main();
