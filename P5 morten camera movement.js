let camX = 0;
let camY = 0;
let camZ = 150;

let centerX = 0;
let centerY = 0;
let centerZ = 0;
let cam = 0;

movmentspeed=15;

let morten1;

speedZ=5;

let slider;
let slider1;

x=0;
y=0;
z=0;


x0=2;
y0=2;
z0=4;

x1=1;
y1=4;
z1=4;

x2=3;
y2=12;
z2=2;

s1=2;
s2=3;


 function preload()
{

morten1=loadImage('Morten.jpg');
}

function setup() 
{
  createCanvas(400, 400,WEBGL);
  angleMode(DEGREES);

  slider = createSlider(1, 100, 2);
  slider.position(50, 400);
  slider.style('width', '80px');

  slider1 = createSlider(1, 100, 2);
  slider1.position(300, 400);
  slider1.style('width', '80px');
 
 
}


function draw() 
{
  background(220);
  
  camera(camX, camY, camZ + sin(frameCount * 0.01) * 10, camX, camY, camZ, 0, 1, 0);
  


 /*
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
  */

  /*
if(camX<-40)
{
  camX=-40;
}

if(camX>40)
{
  camX=40;
}

if(camY<-40)
{
  camY=-40;
}

if(camY>40)
{
  camY=40;
}
*/





 if(keyIsDown(68))
  {
    camX = camX + movmentspeed;
  }
 
  if(keyIsDown(65))
  {
    camX = camX - movmentspeed;
  }
 
  if(keyIsDown(87))
  {
    camY = camY - movmentspeed;
  }
  
  if(keyIsDown(83))
  {
    camY = camY + movmentspeed;
  }
  
   
 
  
  if(keyIsDown(38))
  {
    camZ = camZ-movmentspeed;
  }
  
  if(keyIsDown(40))
  {
    camZ = camZ+movmentspeed;
  }
  
  if(z>100)
  {
      z = 0;
      x = random(-100,100);
      y = random(-100,100);
  } 
  

  /*
  mybox(30,20,40,x,y,z);
 
  z=speedZ+z;
  */

    
      
      
    
    
for (let i = 0; i < slider.value(); i++) 
{
    for (let s = 0; s < slider1.value(); s++)
    
    { 
     s1 = i*20;
     s2 = s*20;
     x=x0+(s1*(x1-x0))+(s2*(x2-x0));
     y=y0+(s1*(y1-y0))+(s2*(y2-y0));
     z=z0+(s1*(z1-z0))+(s2*(z2-z0));

    push();
    translate(x,y,z);
    sphere(20);
    pop();
    } 
  
}
  






function mybox(d,w,h,x,y,z)
{

 push();
 translate(x,y,z);
 box(d,w,h);
 pop();
 
}
}
