const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,630,2000,20);
	left = new Ground(900,560,20,120);
	right = new Ground(1150,560,20,120);

	ball_options = {

		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,

	};

	ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background(0);
  
  ground.show();
  left.show();
  right.show();

  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();

  Engine.update(engine);
 
}

function keyPressed() {

	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,{x:0,y:0},{x:20,y:-20});

	}

}