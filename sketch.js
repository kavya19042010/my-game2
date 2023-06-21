const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, dragon, background
var gameState = "fight"

function preload() {
  backgroundImg = loadImage("./assets/background.jpg");
  dragonImage = loadImage("./assets/dragon.webp");
  enemyImg = loadImage("assets/enemy.png")
  fireballImg = loadImage("assets/fireball.png")
    
}


function setup() {
    createCanvas(windowWidth,windowHeight);
    background = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
    background.addImage(backgroundImg)
    background.scale = 1.1
      
    dragon = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   dragon.addImage(dragonImg)
      dragon.scale = 0.3
      dragon.debug = true
     dragon.setCollider("rectangle",0,0,300,300)
     enemyGroup = new Group()
    fireballGroup = new Group()

}



function draw() {
    background(0); 
    if(keyDown("UP_ARROW")||touches.length>0){
        dragon.y = player.y-30
      }
      if(keyDown("DOWN_ARROW")||touches.length>0){
      dragon.y = player.y+30
      }
      if(keyWentDown("space")){
       fireball = createSprite(displayWidth-1150,player.y-30,20,10)
        fireball.velocityX = 20
       
      }
      if(enemyGroupGroup.isTouching(fireballGroup)){
        for(var i=0;i<fireballGroup.length;i++){     
            
  if(enemyGroupGroup[i].isTouching(fireballGroup)){
      
  enemyGroup[i].destroy()
     
     fireballGroup.destroyEach()
             
              } 
      if(enemyGroup.isTouching(dragon)){
      

     for(var i=0;i<enemyGroup.length;i++){     
                     
   if(enemyGroup[i].isTouching(dragon)){
  enemyGroup[i].destroy()
  gameState = END     
               
    } 
  }
  }
  }
     enemy();
}

drawSprites();


if(gameState == "lost"){ 
  textSize(100)
  fill("red")
text("You lost",width/2,height/2)
 
  enemyGroup.destroyEach()
  
  dragon.destroy()
 }
 function enemy(){
    if(frameCount%50===0){
  
      //giving random x and y positions for zombie to appear
    enemy= createSprite(random(500,1100),random(100,500),40,40)
  
     enemy.addImage(enemyImg)
      enemy.scale = 0.15
      enemy.velocityX = -3
      enemy.debug= true
      enemy.setCollider("rectangle",0,0,400,400)
     
      enemy.lifetime = 400
     enemyGroup.add(enemy)
    }
  
  }

 }
      
          











