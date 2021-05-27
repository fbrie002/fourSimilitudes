//  CHASING LIGHT \\

let orbs = [];

let sun;
let star;

let angle = 0;
let speed = 0.6;

let heart;
let sounds;
let heartAmp;
let soundsAmp;
let heartVol;
let soundsVol;

function preload() {
    //load sound files
    heart = loadSound('assets/just-heart.mp3');
    sounds = loadSound('assets/just-sounds.mp3');
}

function setup() {
    var canvas = createCanvas(300, 300);

    canvas.parent('analogia-sketch');
    //created 2 aplitude objects to store a sound each so that they can inidivisually affect the orbs' radius
    heartAmp = new p5.Amplitude();
    heartAmp.setInput(heart);
    soundsAmp = new p5.Amplitude();
    soundsAmp.setInput(sounds);

    //colorMode HSB allows for the orbs' apparent glow
    colorMode(HSB, 360, 100, 100);
    ellipseMode(RADIUS);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    //get the volume level from the amplitude object
    heartVol = heartAmp.getLevel();
    soundsVol = soundsAmp.getLevel();
    
    //center sketch and rotate by angle
    translate(width / 2, height / 2);
    rotate(angle);

    //two separate orbs are created, their radius dependent on the volume derived from the sound files 
    sun = new Orb(-80, -cos(60), 50 - heartVol * 500);
    star = new Orb(sin(70), (50), 30 + soundsVol * 1000);

    //run the orbs and animate
    sun.run();
    star.run();
    angle = angle + speed;
}

function mousePressed() {
    //mouePressed plays and pauses the sounds
    if (sounds.isPlaying()) {
        heart.stop();
        sounds.stop();
    } else {
        //sound files are looped to allow for seemless infinite play of sketch
        heart.loop();
        sounds.loop();
    }
}

//contructor function for the orbs
function Orb(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.run = function () {
        this.draw();
    }

    this.draw = function () {
        //the color is HSB based on the radius and creates the glow
        this.h = 1;
        for (let r = this.radius; r > 0; --r) {
            fill(this.h, 100, (this.h / r * 3) * 4);
            ellipse(this.x, this.y, r);
            this.h = (this.h + 1) % 360;
        }
        noStroke();
    }
}