;(function(){
  var Game = function(id){
    var self = this;
    self.canvas = document.getElementById(id);
    self.screen = self.canvas.getContext('2d');

    //game objects
    // this.ball = new Ball({

    // });
    this.player = new Player({
      screen: this.screen,
      canvas: this.canvas,
    });
    self.bodies = [this.player];

    var tick = function(){
      self.update();
      self.draw();
      requestAnimationFrame(tick);
    };
    tick();
  };

  Game.prototype = {
    update: function(){
      this.bodies.forEach(function(body){
        body.update();
      });
    },
    draw: function(){
      this.screen.clearRect(0,0,this.canvas.width,this.canvas.height);
      this.bodies.forEach(function(body,i){
        body.draw();
      });
    },
  };

  window.onload = function(){
    new Game('screen');
  };

})();