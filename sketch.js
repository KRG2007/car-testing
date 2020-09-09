var car,wall,speed,weight, deformation;

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(600,200,60,height/2);
  wall.shapeColor="white";
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
  
  
}

function draw() {
  background(80,80,80);
  deformation=0.5*weight*speed*speed/22500;  
  if(deformation<100){
    car.shapeColor="green";
  }
  else if(deformation>100<180){
    car.shapeColor="yellow";
  }
else if(deformation>180){
  car.shapeColor="red";
}
  
  
  drawSprites();
}