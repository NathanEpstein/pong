var Computer = function(config){
  var self = this;
  Object.keys(config).forEach(function(key){
    self[key] = config[key];
  });

  //keyboard,initial position, dimensions, and speed
  this.center = {x:this.canvas.width - 15, y:this.canvas.height/2};
  this.size = {x: 10, y: 75 }
  this.speed = 5;
};

Computer.prototype = {
  update: function(){
    if (this.center.y > this.ball.center.y && this.center.y - this.size.y/2 > 0){
      this.center.y -= this.speed;
    }
    else if (this.center.y < this.ball.center.y && this.center.y + this.size.y/2 + this.speed < this.canvas.height) {
      this.center.y += this.speed;
    }
  },
  draw: function(){
    this.screen.fillRect(this.center.x - this.size.x/2, this.center.y - this.size.y/2,this.size.x, this.size.y);
  },
};

