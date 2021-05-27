
//An adaptiation of the code provided by dvschultz:
//https://github.com/dvschultz/runway_site

let truncation_value = 0.5;
let inp;
let seed;

//my runwayML model
const model = new rw.HostedModel({
    url: "https://star-plant-2-1-34ef7e0b.hosted-models.runwayml.cloud/v1/",
    token: "vv+dXE+2F9lsDgxYcK9MPg==",
});

//checking if model is active and sending updates to html text
if(typeof(model)=='undefined'){
  console.log('model inactive')
} else {
  console.log('model active')
  document.querySelectorAll('#inactive')[0].classList.add('hidden')
}

async function checkModel() {
  document.querySelector('body').classList.add('loading')
  if(typeof(model)!='undefined'){
    await model.waitUntilAwake();
    document.querySelector('body').classList.remove('loading')
  }
}

function setup() {
    pixelDensity(1);
    createCanvas(windowWidth, 512);
    noStroke();
    checkModel();
}


function mousePressed(){
    // each time mouse is pressed a new image is generated
        randomSeed(seed);
        getImageFromRunway()
}

async function getImageFromRunway() {
    randomSeed(seed);
    z = createZ(512)
    const inputs = {
        "z": z,
        "truncation": truncation_value
    };

    if(typeof(model)!= 'undefined') {
    const result = await model.query(inputs)
    gotImage(result)

    }
}

function gotError(error) {
    console.error(error);
}

function gotImage(result) {
    i = createImg(result.image, imageReady);
    i.hide();
}

function imageReady() {
    image(i, 0, 40, 512, 512);
}

function createZ(v) {
    let z = [];
    for (let zi = 0; zi < v; zi++) {
        z.push(random(-1, 1))
    }
    return z;
}