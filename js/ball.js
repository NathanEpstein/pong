var Ball = function(config){
  var self = this;
  Object.key(config).forEach(function(key){
    self[key] = config[key];
  });

  //initial position and velocity
  this.center = {x:this.canvas.width/2, y:this.canvas.height/2};
  this.velocity = {x: -2, y: -2};
};

Ball.prototype = {
  update: function(){
    //move the ball if

  },
  draw: function(){

  },
}