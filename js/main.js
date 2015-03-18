;(function(){
  var Game = function(id){
    var self = this;
    self.canvas = document.getElementById(id);
    self.screen = self.canvas.getContext('2d');

    //game objects
    this.compScore = 0;
    this.playScore = 0;

    this.player = new Player({
      screen: this.screen,
      canvas: this.canvas,
    });
    this.computer = new Computer({
      screen: this.screen,
      canvas: this.canvas,
      ball: new Ball({
             screen: this.screen,
             canvas: this.canvas,
             player: this.player,
             game: this,
           }),
    });
    this.ball = this.computer.ball;
    this.ball.computer = this.computer;

    self.bodies = [this.player,this.ball,this.computer];

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