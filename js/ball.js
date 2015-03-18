var Ball = function(config){
  var self = this;
  Object.keys(config).forEach(function(key){
    self[key] = config[key];
  });

  //initial position and velocity
  this.velocity = {x: -5, y: 5};
  this.center = {x:this.canvas.width/2, y:this.canvas.height/2};
  this.size = {x:10,y:10};
};

Ball.prototype = {
  update: function(){
    //increase speed slightly
    this.velocity.x += Math.sign(this.velocity.x)*Math.pow(10,-3);
    this.velocity.y += Math.sign(this.velocity.y)*Math.pow(10,-3);

    //change velocity for collisions
    //top and bottom
    if (this.center.y - this.size.y/2 < 0 || this.center.y + this.size.y/2 > this.canvas.height){
      this.velocity.y = (-1) * this.velocity.y;
    }
    //player collision
    if (collide(this.player,this)) {
      this.center.x = this.player.center.x + this.player.size.x/2 + 1;
      this.velocity.x = (-1) * this.velocity.x;
    }
    if (collide(this.computer,this)) {
      this.center.x = this.computer.center.x - this.computer.size.x/2 - 1;
      this.velocity.x = (-1) * this.velocity.x;
    }

    //move the ball according to its velocity
    this.center.x += this.velocity.x;
    this.center.y += this.velocity.y;

    //restart game for a winner
    if (this.center.x < 0){
      this.game.compScore++;
      document.getElementById('computer').innerHTML = 'Computer: '+this.game.compScore;
      this.restart();
    }
    if (this.center.x > this.canvas.width){
      this.game.playScore++;
      document.getElementById('player').innerHTML = 'Player: '+this.game.playScore;
      this.restart();
    }
  },
  draw: function(){
    this.screen.fillRect(this.center.x - this.size.x/2, this.center.y - this.size.y/2,this.size.x, this.size.y);
  },
  restart:function(){
    this.velocity = {x: -5, y: 5};
    this.center = {x:this.canvas.width/2, y:this.canvas.height/2};
  }
};

var collide = function(left, right){
  //check for no contact
  if (left.center.y + left.size.y/2 < right.center.y - right.size.y/2){
    return false
  }
  if (left.center.y - left.size.y/2 > right.center.y + right.size.y/2){
    return false
  }
  if (left.center.x + left.size.x/2 < right.center.x - right.size.x/2){
    return false;
  }
  if (left.center.x - left.size.x/2 > right.center.x + right.size.x/2){
    return false;
  }

  return true;

  // //exclude 'sticky collision'
  // if (left.center.x < right.center.x){
  //   return true;
  // }
  // else{
  //   return false;
  // }
}
