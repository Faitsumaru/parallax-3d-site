let canvas = document.getElementsByClassName('sand')[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

function randomNum(max, min) {
    return Math.floor(Math.random() * max) + min;
}

function Sandstorm(x, y, endy, velocity, opacity) {

    this.x = x;
    this.y = y;
    this.endy = endy;
    this.velocity = velocity;
    this.opacity = opacity;

    this.draw = function() {
        c.beginPath();
        c.moveTo(this.x - this.y, this.y - this.x);
        c.lineTo(this.x - this.endy, this.y + this.endy);
        c.lineWidth = 1;
        c.strokeStyle= "rgba(255, 187, 0, " + this.opacity + ")";
        c.stroke();
    }

    this.update = function() {
        let stormEnd = window.innerHeight + 100;
        if (this.y >= stormEnd) {
            this.y = this.endy - 100;
        } else {
            this.y = this.y + this.velocity;
        }
        this.draw();
    }

}

let stormArray = [];

for (let i = 0; i < 140; i++) {
    let stormXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
    let stormYLocation = Math.random() * -500;
    let randomStormHeight = 4;
    let randomSpeed = randomNum(50, 1);
    let randomOpacity = Math.random() * .55;
    stormArray.push(new Sandstorm(stormXLocation, stormYLocation, randomStormHeight, randomSpeed, randomOpacity));
}

function animateStorm() {

    requestAnimationFrame(animateStorm);
    c.clearRect(0,0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < stormArray.length; i++) {
        stormArray[i].update();
    }

}

animateStorm();
