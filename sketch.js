var bullet,wall;
var speed,weight,thickness;
var deformation;
var damage;
function setup() {
  createCanvas(1500,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  bullet =createSprite(50,200,20,30);
  wall=createSprite(1200,200,thickness,300);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    damage= weight*weight*speed/(thickness*thickness*thickness);
    if(damage<10)
    {
      bullet.shapeColor="red";
    }
    if(damage>10)
    {
      bullet.shapeColor="green";
    }
  }
  
  drawSprites();
}
  
  function hasCollided(lwall,lbullet)
  {
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge<=wallLeftEdge)
    {
      return true
    }
      return false;
  }
