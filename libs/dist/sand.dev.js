"use strict";

var canvas2 = document.getElementsByClassName('sand')[0];
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
var d = canvas2.getContext('2d');

function randomNum(max, min) {
  return Math.floor(Math.random() * max) + min;
}

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

for (var i = 0; i < 140; i++) {
  var stormXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
  var stormYLocation = Math.random() * -500;
  var randomStormHeight = 4;
  var randomSpeed = randomNum(50, 1);
  var randomOpacity = Math.random() * .55;
  stormArray.push(new Sandstorm(stormXLocation, stormYLocation, randomStormHeight, randomSpeed, randomOpacity));
}

function animateStorm() {
  requestAnimationFrame(animateStorm);
  d.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (var _i = 0; _i < stormArray.length; _i++) {
    stormArray[_i].update();
  }
}

animateStorm();