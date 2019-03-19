let a = 10;
let b = 28;
let c = 8.0/3.0;
let dt = 0.01;
let dot;
let dot1;
let points = [];
let points1 = [];


function setup(){
  createCanvas(800, 800, WEBGL);
  colorMode(HSB);
  dot = new Lorenz(0.01 , 0, 0);
  dot1 = new Lorenz(0.03 , 0, 0);
}

function draw(){
  background(0);
  // camera(0, 0, 1, 0, 0, 0, 0, 0, 1, 0);
  orbitControl()
  points.push(createVector(dot.x,dot.y,dot.z));
  points1.push(createVector(dot1.x,dot1.y,dot1.z));

  dot.update();
  dot1.update();

  // translate(width/2,height/2);
  translate(0,0, -80);
  scale(3);
  strokeWeight(2);
  stroke(255);
  scale(3);
  noFill();

  // let color = 0;
  beginShape();
  for (let d of points){
    stroke(0, 255, 255)
    vertex(d.x, d.y, d.z);
    // color += 0.1;
    //
    // if (color === 255){
    //   color = 0;
    // }
  }
  endShape();

  beginShape();
  for (let e of points1){
    stroke(50, 255, 255)
    vertex(e.x, e.y, e.z);
    // color += 0.1;
    //
    // if (color === 255){
    //   color = 0;
    // }
  }
  endShape();

}

function Lorenz(x, y , z){
  this.x = x;
  this.y = y;
  this.z = z;

  this.update = function(){
    this.dx = (a * (this.y - this.x)) * dt;
    this.dy = (this.x * (b - this.z) - this.y) * dt;
    this.dz = (this.x * this.y - c * this.z) * dt;
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
    this.z = this.z + this.dz;
  }
}
