//  SEA ANEMONE - the play of Synpathies \\

var heads = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    //30 tentacle heads are generated at the start, originating from the center of the canvas and initially pushing out at random speeds. 
    for (var i = 0; i < 30; i++) {
        heads.push(new Head);
    }
}

function draw() {
    background(0, 15); /// transparency in the background is key to create the illusion of the tentacle tails/trails.

        let color1 = createVector(255, 0, 0);
        let color2 = createVector(0, 0, 255);
        let lerpColor = p5.Vector.lerp(color1, color2, 0.5);

//        fill(lerpColor);
        fill(255, 0, 0);

    for (var i = 0; i < heads.length; i++) {
        ///attraction to the origin
        target = createVector(width / 3.5, height / 2); //the target is the origin, they want to go back to it
        var attraction = p5.Vector.sub(target, heads[i].loc);
        attraction.setMag(0.4);

        heads[i].applyForce(attraction);

        ///friction
        var friction = heads[i].speed.copy(); //simulates the friction created by water and contains the heads 
        friction.mult(-1); //by reversing and counteracting their speed
        friction.normalize();
        friction.mult(0.15);

        heads[i].applyForce(friction);

        heads[i].run();

    }

    //////grow the sea anemone
    if (mouseIsPressed) { //add heads if the mouse is pressed
        for (var i = 0; i < 1; i++) {
            heads.push(new Head);

            //when the number of heads reaches 400, start again from 1 head so that the sketch can be used continuously by numerous users, without needing to reload the page
            if(heads.length >= 400){
                heads.length = 1;
                heads.push(new Head);
            }
        }
    }
}

function Head() {
    this.speed = createVector(random(-1, 1), random(-1, 1));
    this.loc = createVector(width / 3.5, height / 2);
    this.mass = 3;
    this.diam = this.mass * 10;
    this.acceleration = createVector(0, 0);

    this.touches = false;

    this.run = function () {
        this.draw();
        this.move();
        this.touch();
    }

    this.draw = function () {
        this.diam = this.mass * 5;

        noStroke();
        ellipse(this.loc.x, this.loc.y, this.diam / 2.5, this.diam / 2);
    }

    this.move = function () {
        this.speed.add(this.acceleration);
        this.loc.add(this.speed);
        this.acceleration.mult(0);
    }

    this.touch = function () { //calculates distance and intersection between tentacle heads and creates a repellant force
        this.touches = false;

        for (var i = 0; i < heads.length; i++) {
            var d = abs(dist(this.loc.x, this.loc.y, heads[i].loc.x, heads[i].loc.y));

            if (d <= this.diam / 2 + heads[i].diam / 2) {
                this.touches = true;

                //repel tentacle heads from eachother
                var repel = p5.Vector.sub(heads[i].loc, this.loc);
                repel.setMag(0.7);

                heads[i].applyForce(repel);
            }
        }
    }

    this.applyForce = function (f) {
        var calibratedForce = f.copy();
        calibratedForce.div(this.mass);
        this.acceleration.add(calibratedForce);
    }
}