function setSize(camera, renderer, container) {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
}
class Resizer {
  constructor(camera, renderer, container) {
    setSize(camera, renderer, container);
    window.addEventListener("resize", () => {
      setSize(camera, renderer, container);
      this.onResize();
    });
  }
  onResize() {}
}

export { Resizer };
