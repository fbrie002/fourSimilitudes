//  CHASING LIGHT \\

let orbs = [];

let sun;
let star;

let angle = 0;
let speed = 0.2;

function setup() {
    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100);
    ellipseMode(RADIUS);

    sun = new Orb(-80, -cos(60));
    star = new Orb (sin(70), (50));

    angleMode(DEGREES);
}

function draw() {
    background(0, 255);
    translate(width / 2, height / 2);
    rotate(angle);

    for (var i = 0; i < orbs.length; i++){
        orbs[i].run;
    }

    sun.run();
    star.run();
    angle = angle + speed;

    speed = 1.1 * random(1,2);

}

function mousePressed() {
    click = !click;
}

function Orb(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 50;

    this.run = function () {
        this.draw();
    }

    this.draw = function () {
        this.h = 1;
        for (let r = this.radius; r > 0; --r) {
            fill(this.h, 100, (this.h / r * 3) * 4);
            ellipse(this.x, this.y, r);
            this.h = (this.h + 1) % 360;
        }
        noStroke();   
    }
}