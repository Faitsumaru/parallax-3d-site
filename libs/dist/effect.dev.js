"use strict";

var canvas = document.getElementsByClassName('rain')[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

function randomNum(max, min) {
  return Math.floor(Math.random() * max) + min;
}

function RainDrops(x, y, endy, velocity, opacity) {
  this.x = x;
  this.y = y;
  this.endy = endy;
  this.velocity = velocity;
  this.opacity = opacity;

  this.draw = function () {
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x, this.y - this.endy);
    c.lineWidth = 1;
    c.strokeStyle = "rgba(255, 255, 255, " + this.opacity + ")";
    c.stroke();
  };

  this.update = function () {
    var rainEnd = window.innerHeight + 100;

    if (this.y >= rainEnd) {
      this.y = this.endy - 100;
    } else {
      this.y = this.y + this.velocity;
    }

    this.draw();
  };
}

var rainArray = [];

for (var i = 0; i < 140; i++) {
  var rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
  var rainYLocation = Math.random() * -500;
  var randomRainHeight = randomNum(10, 2);
  var randomSpeed = randomNum(20, .2);
  var randomOpacity = Math.random() * .55;
  rainArray.push(new RainDrops(rainXLocation, rainYLocation, randomRainHeight, randomSpeed, randomOpacity));
}

function animateRain() {
  requestAnimationFrame(animateRain);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (var _i = 0; _i < rainArray.length; _i++) {
    rainArray[_i].update();
  }
}

animateRain();
var canvas2 = document.getElementsByClassName('sand')[0];
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
var d = canvas2.getContext('2d');

function Sandstorm(x, y, endy, velocity, opacity) {
  this.x = x;
  this.y = y;
  this.endy = endy;
  this.velocity = velocity;
  this.opacity = opacity;

  this.draw = function () {
    d.beginPath();
    d.moveTo(this.x - this.y, this.y - this.x);
    d.lineTo(this.x - this.endy, this.y + this.endy);
    d.lineWidth = 1;
    d.strokeStyle = "rgba(255, 187, 0, " + this.opacity + ")";
    d.stroke();
  };

  this.update = function () {
    var stormEnd = window.innerHeight + 100;

    if (this.y >= stormEnd) {
      this.y = this.endy - 100;
    } else {
      this.y = this.y + this.velocity;
    }

    this.draw();
  };
}

var stormArray = [];

for (var _i2 = 0; _i2 < 140; _i2++) {
  var stormXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
  var stormYLocation = Math.random() * -500;
  var randomStormHeight = 4;

  var _randomSpeed = randomNum(50, 1);

  var _randomOpacity = Math.random() * .55;

  stormArray.push(new Sandstorm(stormXLocation, stormYLocation, randomStormHeight, _randomSpeed, _randomOpacity));
}

function animateStorm() {
  requestAnimationFrame(animateStorm);
  d.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (var _i3 = 0; _i3 < stormArray.length; _i3++) {
    stormArray[_i3].update();
  }
}