
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground, paper;
var box_left, box_bottom, box_right;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//creates the ground
	ground = new Ground();

	//The boxes for dustbin
	box_left = new Dustbin(920,320,20,100,false);
	box_right = new Dustbin(1080,320,20,100,false);
	box_bottom = new Dustbin(1000,360,180,20,true);
	//

	//dustbin = new Dustbin2(1000,300,18,20);
	paper = new Paper();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  paper.display();
  box_left.display();
  box_right.display();
  box_bottom.display();
  
  //dustbin.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.postion, {x:0.045,y:-0.045})
	}
}