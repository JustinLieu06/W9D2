const Asteroid = require("./asteroid.js");

function Game(DIM_X, DIM_Y, NUM_ASTEROIDS) {
  this.DIM_X = DIM_X;
  this.DIM_Y = DIM_Y;
  this.NUM_ASTEROIDS = NUM_ASTEROIDS;
  this.asteroid = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
  let i = 0;
  while (i < this.NUM_ASTEROIDS){
    this.asteroid.push(new Asteroid(this.randomPosition()));
    i++;
  }
};

Game.prototype.randomPosition = function () {
  let pos = [];
  pos.push(Math.floor(Math.random() * Math.floor(this.DIM_X) ));
  pos.push(Math.floor(Math.random() * Math.floor(this.DIM_Y) ));
  return pos;
};

// Game.prototype.draw(ctx) = function

module.exports = Game;