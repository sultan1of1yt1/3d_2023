let camX = 0;
let camY = 0;
let camZ = 150;
let centerX = 0;
let centerY = 0;
let centerZ = 0;
let cam = 0;
movmentspeed=15;
let morten1;
x=0;
y=0;
z=0;
speedZ=5;

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
  camera(camX, camY, camZ + sin(frameCount * 0.01) * 10, camX, camY, camZ, 0, 1, 0);
  mybox(30,20,40,x,y,z);
 
  z=speedZ+z;

 
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
 
  

 if(keyIsDown(68))
  {
    camX= camX+movmentspeed;
  }
 
  if(keyIsDown(65))
  {
    camX = camX-movmentspeed;
  }
 
  if(keyIsDown(87))
  {
    camY = camY-movmentspeed;
  }
  
  if(keyIsDown(83))
  {
    camY = camY+movmentspeed;
  }
  
   
 
  /*
  if(keyIsDown(38))
  {
    camZ = camZ-movmentspeed;
  }
  
  if(keyIsDown(40))
  {
    camZ = camZ+movmentspeed;
  }
  */
  if(z>100)
  {
      z = 0;
      x = random(-100,100);
      y = random(-100,100);
  } 
}
function mybox(d,w,h,x,y,z)
{

 push();
 translate(x,y,z);
 box(d,w,h);
 pop();

 
  
}