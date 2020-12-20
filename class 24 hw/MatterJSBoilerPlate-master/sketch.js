
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
Engine.run(engine);

paperball = new Paper(100,100,20,30);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperball.display();
  
  drawSprites();
 
}



