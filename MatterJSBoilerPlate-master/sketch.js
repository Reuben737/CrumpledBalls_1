
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper_1,paperObject,paperBody;
var dustbin_1;
var ground;

function preload(){
	
}

function setup() {
	createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(200,300,400,20)
	paper_1= new Paper(100,150,20,50);
	dustbin_1=createSprite(200,300,100,20);
    dustbin_2=createSprite(150,280,20,50);
	dustbin_3=createSprite(250,280,20,50);

	//Create the Bodies Here.
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 keyPressed(); 
  paper_1.display();
 ground.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.applyForce(paperObject.paperBody,paperObject.paperBody.position,{x:85,y:-85});
   }
   }

