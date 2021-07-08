
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1;
var wall2;
var wall3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	wall1 = new Ground(400, 590, 800, 20);
	wall2 = new Ground(500, 590, 20, 350);
	wall3 = new Ground(700, 590, 20, 350);

	var opts = {
		restitution:0.3,
		density:1.2
	}

	ball = Bodies.circle(200, 100, 40, opts);
	World.add(world, ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  wall1.show();
  wall2.show();
  wall3.show();


  fill(255);
  ellipse(ball.position.x, ball.position.y, 40);

  if(keyDown("up")){
	  Matter.Body.applyForce(ball, {x:0, y:0}, {x:45, y:500});
  }

  if(keyDown("r")){
	  window.location.reload();
  }

  drawSprites(); 
}



