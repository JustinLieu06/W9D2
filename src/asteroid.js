const MovingObject = require("./moving_object.js").MovingObject;
// const mo = require("./moving_object.js").mo;

const ut = require("./util.js");

function Asteroid(pos){
  // MovingObject.call(this, pos: pos, vel: ut.randomVec(5), radius: 10, color: "#BB0000");
  
  // this.color = "#BB0000";
  // this.radius = 30;
  // this.vel = ut.randomVec(5);
  const obj = { pos: pos, vel: ut.randomVec(5), radius: 30, color: "#FF0000"}
  MovingObject.call(this, obj);
}

// ut.inherits(Asteroid, mo.__proto__.constructor);
ut.inherits(Asteroid, MovingObject);

// const rock = new Asteroid( [30, 30] );

module.exports = Asteroid;