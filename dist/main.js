/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\").MovingObject;\n// const mo = require(\"./moving_object.js\").mo;\n\nconst ut = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction Asteroid(pos){\n  // MovingObject.call(this, pos: pos, vel: ut.randomVec(5), radius: 10, color: \"#BB0000\");\n  \n  // this.color = \"#BB0000\";\n  // this.radius = 30;\n  // this.vel = ut.randomVec(5);\n  const obj = { pos: pos, vel: ut.randomVec(5), radius: 30, color: \"#FF0000\"}\n  MovingObject.call(this, obj);\n}\n\n// ut.inherits(Asteroid, mo.__proto__.constructor);\nut.inherits(Asteroid, MovingObject);\n\n// const rock = new Asteroid( [30, 30] );\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nfunction Game(DIM_X, DIM_Y, NUM_ASTEROIDS) {\n  this.DIM_X = DIM_X;\n  this.DIM_Y = DIM_Y;\n  this.NUM_ASTEROIDS = NUM_ASTEROIDS;\n  this.asteroid = [];\n  this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function () {\n  let i = 0;\n  while (i < this.NUM_ASTEROIDS){\n    this.asteroid.push(new Asteroid(this.randomPosition()));\n    i++;\n  }\n};\n\nGame.prototype.randomPosition = function () {\n  let pos = [];\n  pos.push(Math.floor(Math.random() * Math.floor(this.DIM_X) ));\n  pos.push(Math.floor(Math.random() * Math.floor(this.DIM_Y) ));\n  return pos;\n};\n\n// Game.prototype.draw(ctx) = function\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mo = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\").mo;\n// const rock = require(\"./asteroid.js\");\n// const Asteroid = require(\"./asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nconsole.log(\"Webpack is working!\");\n\ndocument.addEventListener('DOMContentLoaded', (event) => {\n  console.log('DOM');\n  let ctx = document.getElementById(\"game-canvas\").getContext('2d');\n  // mo.draw(ctx);\n  // window.rock = rock;\n  // rock.draw(ctx);\n  let g = new Game(750, 750, 4);\n  for (let i = 0; i < g.asteroid.length; i++){\n    // debugger\n    g.asteroid[i].draw(ctx);\n  }\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options){\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n}\n\nMovingObject.prototype.draw = function(ctx){\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n};\n\n// const mo = new MovingObject(\n//   { pos: [30, 30], vel: [10, 10], radius: 30, color: \"#00FF00\" }\n// );\n\nconst mo = new MovingObject(\n  { pos: [250, 250], vel: [10, 10], radius: 50, color: \"#00FF00\" }\n);\n\nmodule.exports = {mo, MovingObject};\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Util.inherits = function (childClass, parentClass) {\n//   function Surrogate () {}\n//   Surrogate.prototype = parentClass.prototype;\n//   childClass.prototype = new Surrogate();\n//   childClass.prototype.constructor = childClass;\n// }\n\nconst Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() { }\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  }, \n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  } \n\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });