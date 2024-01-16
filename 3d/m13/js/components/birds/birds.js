import { GLTFLoader } from "../../../../vendor/three/examples/jsm/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel.js";

const gltfLoader = new GLTFLoader();
async function loadBirds() {
  const [parrotData, flamingoData, storkData] = await Promise.all([
    gltfLoader.loadAsync("../../../../m12/assets/models/Parrot.glb"),
    gltfLoader.loadAsync("../../../../m12/assets/models/Flamingo.glb"),
    gltfLoader.loadAsync("../../../../m12/assets/models/Stork.glb"),
  ]);
  const parrot = setupModel(parrotData);
  parrot.position.set(0, 0, 2.5);

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(7.5, 0, -10);

  const stork = setupModel(storkData);
  stork.position.set(0, -2.5, -10);
  return { parrot, flamingo, stork };
}

export { loadBirds };
