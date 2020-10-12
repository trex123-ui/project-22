var wall,car
var speed,weight
function setup() {
  createCanvas(800,400);
  car = createSprite (50,200,50,50)
  wall = createSprite (1500,200,60,height/2)
  
  speed = random (55,90)
  weight = random (400,1500)
  car.velocityX = speed

}

function draw() {
  background(0,0,0,0,);
  
  drawSprites();
}