const mo = require("./moving_object.js").mo;
// const rock = require("./asteroid.js");
// const Asteroid = require("./asteroid.js");
const Game = require("./game.js");

console.log("Webpack is working!");

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM');
  let ctx = document.getElementById("game-canvas").getContext('2d');
  // mo.draw(ctx);
  // window.rock = rock;
  // rock.draw(ctx);
  let g = new Game(750, 750, 4);
  for (let i = 0; i < g.asteroid.length; i++){
    // debugger
    g.asteroid[i].draw(ctx);
  }
});

