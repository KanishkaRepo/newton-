
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bobObject1,bobObject2,bobObject3,bobObject4;
var roof;
var rope1;
var bobDiameter = 200;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350, 200, 400, 25);
	bobObject1 = new Bob(250,410,25);
	bobObject2 = new Bob(300,410,25);
	bobObject3 = new Bob(350,410,25);
	bobObject4 = new Bob(400,410,25);
	rope1 = new Rope(bobObject1.body, roof.body, bobDiameter*2, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  drawSprites();
  bobObject1.display();
  roof.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  rope1.display();
 
}



