(function() {
  var worker = new Joy.SpriteSheet({
    x: 10,
    y: 100,
    name: "worker",
    src: "assets/cogWorkerSheet30x30.png",
    width: 30,
    height: 30,
     animations: {
      "walking": [0, 3],
      //"idle": [1, 1],
      "waving": [4,7],
    }
  }).bind('load', function() {
    // Change pivot to center
    this.pivot.x = 0,
    this.pivot.y = 0
  }).behave('Button, ClickProp');

  worker.hDir = 1;
  worker.vDir = 1;
  worker.speed = 3;
  worker.scale.set(0.07, 0.07);
  worker.play("walking");
  cog.worker = worker;
})();
