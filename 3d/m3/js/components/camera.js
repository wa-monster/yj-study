import { PerspectiveCamera } from "../../../vendor/three/build/three.module.js";

function createCamera() {
  const fov = 45;
  /**
   * aspect使用了一个虚拟值1作为纵横比，因为它依赖于container的尺寸。
   * 我们想避免不必要地传递东西，所以我们将推迟设置纵横比，
   * 直到后面我们创建Resizer系统
   * */
  const aspect = 1;
  const near = 0.1;
  const far = 100;
  const instance = new PerspectiveCamera(fov, aspect, near, far);
  instance.position.set(0, 0, 10);
  return instance;
}

export { createCamera };
