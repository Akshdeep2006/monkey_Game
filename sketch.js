var Play=1;
var End=2;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, ground;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  ground=createSprite(300,350,1000,10);
  ground.velocityX=-4;
   ground.x=ground.width/2;
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  gameState=1;
  FoodGroup=new Group();
  obstacleGroup=new Group();
  score=0;
}

function draw() {
  background(200);
  
  if(ground.x<ground.width/2){
    ground.x=300;
  }
  monkey.collide(ground);
  
  
  if(keyDown("space") && monkey.y >300){
    monkey.velocityY = -18;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
spawnbanana();
  spawnobstacle();
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score=score+1;
  }
  if(monkey.isTouching(obstacleGroup)){
     monkey.destroy();
  }
stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  drawSprites();
}
function spawnbanana(){
  if(frameCount % 80 === 0){
    banana=createSprite(600,Math.round(random(120,250)),5,5)
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.lifetime=300;
    banana.scale=0.1;
    FoodGroup.add(banana);
  }
}
function spawnobstacle(){ 
  if(frameCount % 300 === 0){
    obstacle=createSprite(600,320,5,5)
    obstacle.addImage(obstaceImage);
    obstacle.velocityX=-4;
    obstacle.lifetime=300;
    obstacle.scale=0.2;
    obstacleGroup.add(obstacle);
  }
}



