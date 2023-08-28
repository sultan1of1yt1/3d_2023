
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
let posX = 0;
let posY = 0;
let posZ = 0;
let centerX = 0;
let centerY = 0;
let centerZ = 0;
let cam = 0;


  posX=keyIsDown(87);
  posY=keyIsDown(83);
  posZ=keyIsDown(68);
  //let = map(keyIsDown(87),0,width,-600,0);
  background(220);
  
  
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

  if((87))
  {
  //camera(0,0, 200, 0, 0, 0, 0, 1, 0);  
}
}
function keyIsDown(posX,posY)
{
  /*
  push();
  if(keyIsPressed(posY))
  {
    posY=camera(0,200,0,0, 0, 0, 0, 1, 0); 
  }
  pop();
 push();
  if(keyIsDown)
  {
    posX=camera(0,0,300,0, 0, 0, 0, 1, 0); 
  }
 pop();
  */
}