var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var background;
var wall;
var lifeCount=4;
var gameState=0;
var PLAY, END; 

function preload(){
  bulletimage=loadImage("bullet.png")
  bgImage=loadImage("bgimg.png")
  bowImage = loadImage("untitled 5.png");
  red_balloonImage = loadImage("zombie.png");
  green_balloonImage = loadImage("untitled 2.png");
  pink_balloonImage = loadImage("untitled.png");
  blue_balloonImage = loadImage("untitled3.png");
  gunman_shooting=loadImage("gunman.png")
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //creating background
  background = createSprite(width/2,height/2,width/2,height/2);
  wall=createSprite(width/2,height-45,windowWidth,10)
  //scale was 2.5 for 600. How much will it be for width

  background.scale = width*2.5/600
  
  // creating bow to shoot arrow
  surivor = createSprite(width/2,height-100,20,50);
  surivor.addImage("shooter", gunman_shooting); 
  surivor.scale = 0.4
  
   score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
 
  
}

function draw() {
   background.addImage(bgImage)
   if(gameState===PLAY){
    background.scale=1.3*width/600
    
    wall.visible=false
    //moving bow
    ;
    
    if(pinkB.isTouching(wall)||redB.isTouching(wall)||greenB.isTouching(wall)||){
      lifeCount=-1
      
      if(lifeCount===0){
        //write the code to end the game
        //gameState='End'
      }
     }
  
     // release arrow when space key is pressed
    if (keyDown("space")) {
      createArrow();
      
    }
    if(keyDown("left")){
      surivor.x=surivor.x-5
    }
    if(keyDown("right")){
      surivor.x=surivor.x+5
    }
    
    //creating continous enemies
    var select_balloon = Math.round(random(1,3));
    
    if (World.frameCount % 100 == 0) {
      if (select_balloon == 1) {
        redBalloon();
      } else if (select_balloon == 2) {
        greenBalloon();
      } else  {
        blueBalloon();
      } 
       
    }
    if(World.frameCount%2100===0){
      pinkBalloon()
    }
    if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
      score=score+1;
  }
  
  
  
  
   if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
  
  
  
   if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }
  
  
  
  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
    
    
    drawSprites();
      
   }
  if(gameState===END){
    background('Black')
    FileList('yellow')
    text("GAME OVER")
    text("PRESS R TO RESTART")
  }
    

   
  text("Score: "+ score, width-100,50);
}


function redBalloon() {
  var red = createSprite(Math.round(random(50,width-20)),Math.round(random(10, 80)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityY= 3;
  red.lifetime = 150*width/600;
  red.scale = 0.04*width/600
  redB.add(red);
  
}

function blueBalloon() {
  var blue = createSprite(Math.round(random(40,width-20)),Math.round(random(10, 80)), 10, 10);
          blue.addImage(blue_balloonImage);
  blue.velocityY = 3;
  blue.lifetime = 150*width/600;
  blue.scale = 0.04*width/600
  blueB.add(blue);
  
}

function greenBalloon() {
  var green = createSprite(Math.round(random(40,width-20)),Math.round(random(10, 80)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityY = 3;
  green.lifetime = 150*width/600;
  green.scale = 0.04*width/600;
  greenB.add(green);
 
}

function pinkBalloon() {
  var pink = createSprite(Math.round(random(50,width-20)),Math.round(random(10, 80)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityY= 6;
  pink.lifetime = 150;
  pink.scale = 0.09*width/600
  pinkB.add(pink);
 
 //this.body .zombie
}


// Creating  arrows for bow
 function createArrow() {
   if(frameCount%8===0){
    var arrow= createSprite(width/2, height-100, 60, 10);
  
    arrow.addImage(bulletimage)
    arrow.x= surivor.x
    arrow.rotateToDirection=true
    arrow.velocityY  = -6;
    arrow.lifetime = width/6;
    arrow.scale = 0.15
    arrowGroup.add(arrow);
   }

   
}




