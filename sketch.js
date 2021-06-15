var Jaxon
var Jaxon_Running
var Road1
var Road
var Bomb1
var Bomb
var Coin1
var Coin
var invisibleroad
var invisibleroad1

function preload(){
  //pre-load images
  Road1=loadAnimation("path.png");
  Bomb1=loadAnimation("bomb.png");
  Jaxon_Running=loadAnimation("Runner-1.png","Runner-2.png");
  Coin1=loadAnimation("coin.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  Road=createSprite(200,200,20,20);
  Road.addAnimation("path",Road1);
  Jaxon=createSprite(200,350,20,20);
  Jaxon.addAnimation("Running",Jaxon_Running);
  Jaxon.scale=0.1;
  Road.velocityY=3
  invisibleroad=createSprite(30,200,100,400);
  invisibleroad.visible=false
  invisibleroad1=createSprite(370,200,100,400);
  invisibleroad1.visible=false
}

function draw() {
  background(0);
  //code to reset the background
  if(Road.y>400){
    Road.y=height/2;
  }

Jaxon.collide(invisibleroad);
Jaxon.collide(invisibleroad1);
drawSprites();
}