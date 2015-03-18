var Player = function(config){
  var self = this;
  Object.keys(config).forEach(function(key){
    self[key] = config[key];
  });

  //keyboard,initial position, dimensions, and speed
  this.keyboard = new Keyboard();
  this.center = {x:15, y:this.canvas.height/2};
  this.size = {x: 10, y: 75 }
  this.speed = 5;
};

Player.prototype = {
  update: function(){
    if (this.keyboard.down('up') && (this.center.y - this.size.y/2 > 0)){
      this.center.y -= this.speed;
    }
    else if (this.keyboard.down('down') && (this.center.y + this.size.y/2 < this.canvas.height)){
      this.center.y += this.speed;
    }

  },
  draw: function(){
    this.screen.fillRect(this.center.x - this.size.x/2, this.center.y - this.size.y/2,this.size.x, this.size.y);
  },
};

var Keyboard = function(){
  var keyState = {};
  var keys = {'38':'up','40':'down'};

  window.onkeydown = function(e){
    keyState[keys[e.keyCode]] = true;
  };
  window.onkeyup = function(e){
    keyState[keys[e.keyCode]] = false;
  };
  this.down = function(key){
    return keyState[key];
  }
};
