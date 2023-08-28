let camX = 0;
let camY = 0;
let camZ = 300;
let centerX = 0;
let centerY = 0;
let centerZ = 0;
let cam = 0;

let morten1;
 function preload()
{

morten1=loadImage('Morten.jpg');
}

function setup() 
{
  createCanvas(400, 400,WEBGL);
  angleMode(DEGREES);
}


function draw() 
{
  background(220);
  camera(0, 0, 40 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);

 
  push();
  noStroke();
  translate(0,100,0);
  rotateX(90);
  texture(morten1);
  plane(200,200);
  pop();
 
  push();
  noStroke();
  translate(0,0,-100);
  texture(morten1);
  rotateY(180);
  plane(200,200);
  pop();
  
  push();
  noStroke();
  translate(100,0,0);
  texture(morten1);
  rotateY(-90);
  plane(200,200);
  pop();

  push();
  noStroke();
  translate(-100,0,0);
  texture(morten1);
  rotateY(90);
  plane(200,200);
  pop();
  

  push();
  noStroke();
  translate(0,-100,0);
  texture(morten1);
  rotateX(90);
  plane(200,200);
  pop();
 
  box(20,20,20);

 
  
   


}

  
