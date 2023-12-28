import {
  Group,
  MathUtils,
} from "../../../../vendor/three/build/three.module.js";
import { createMeshs } from "./meshs.js";
const wheelSpeed = MathUtils.degToRad(24);
class Train extends Group {
  constructor() {
    super();
    this.meshs = createMeshs();
    this.add(
      this.meshs.cabin,
      this.meshs.chimney,
      this.meshs.nose,
      this.meshs.smallWheelRear,
      this.meshs.smallWheelCenter,
      this.meshs.smallWheelFront,
      this.meshs.bigWheel
    );
  }
  tick(delta) {
    this.meshs.smallWheelRear.rotation.y += delta * wheelSpeed;
    this.meshs.smallWheelCenter.rotation.y += delta * wheelSpeed;
    this.meshs.smallWheelFront.rotation.y += delta * wheelSpeed;
    this.meshs.bigWheel.rotation.y += delta * wheelSpeed;
    console.log("1111111");
  }
}

export { Train };
