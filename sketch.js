
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
  backgroundImg = loadImage("419154.jpg");
 
}


function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
    world = engine.world;
    
 // animation1=new character(400, 200, 50, 50);
  

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  animation1.display();
 // drawSprites();
}