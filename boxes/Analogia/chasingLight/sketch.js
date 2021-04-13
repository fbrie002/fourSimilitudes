//  CHASING LIGHT \\

let orbs = [];

let sun;
let star;

let angle = 0;
let speed = 0.9;

let heart;
let sounds;

var heartAmp;
var soundsAmp;
var heartVol;
var soundsVol;

function preload(){
    heart = loadSound ('assets/just-heart.mp3');
    sounds = loadSound('assets/just-sounds.mp3');
}

function setup() {
    heart.playMode('restart');
    sounds.playMode('restart');

//    heartAmp = new p5.Amplitude();
//    heart.connect(heartAmp);
    soundsAmp = new p5.Amplitude();
    sounds.connect(soundsAmp);
    
    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100);
    ellipseMode(RADIUS);

    angleMode(DEGREES);
}

function draw() {
    background(0, 255);
//    heartVol = heartAmp.getLevel();
    soundsVol = soundsAmp.getLevel();
    
    console.log(soundsVol);
    translate(width / 2, height / 2);
    rotate(angle);
    
    sun = new Orb(-80, -cos(60), 50 - soundsVol*500);
    star = new Orb(sin(70), (50), 30 + soundsVol*1000);

    for (var i = 0; i < orbs.length; i++) {
        orbs[i].run;
    }

    sun.run();
    star.run();
    angle = angle + speed;

    //    speed = 1.1 * random(1,2);

}

function mousePressed() {
    //    click = !click;
    if (sounds.isPlaying()) {
//        heart.stop();
        sounds.stop();
    } else {
//        heart.play();
        sounds.play();
    }
}

function Orb(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

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