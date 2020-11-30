var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var side1;
var side2;
var bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottom = createSprite(400,650,200,20);
	bottom.shapeColor = color(80,0,0);
	side1 = createSprite(300,560,20,200);
	side1.shapeColor = color(80,0,0);
	side2 = createSprite(500,560,20,200);
	side2.shapeColor = color(80,0,0);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  
  if(keyDown(LEFT_ARROW)){
    helicopterSprite.velocityY = 0;
    helicopterSprite.velocityX = -2;
  
  }
  if(keyDown(RIGHT_ARROW)){
    helicopterSprite.velocityX = 2;
    helicopterSprite.velocityY = 0;
}
packageSprite.x = helicopterSprite.x;

if(packageSprite.y > 200){
	helicopterSprite.velocityX = 0;
}
if(packageSprite.collide(bottom)){
	text("you successfully deliverd the supply!!",400,350);
}
if(packageSprite.isTouching(side1)||packageSprite.isTouching(side2)||packageSprite.isTouching(groundSprite)){
	text("you wasted the supply",400,350);
}
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
	
	
	


 }
}



