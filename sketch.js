
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, stone1
var tree1, tree2, tree3, tree4, tree5
var mango1, mango2, mango3, mango4, mango5
var apple1, apple2, apple3, apple4, apple5
var banana1, banana2, banana3, banana4, banana5
var grapes1, grapes2, grapes3, grapes4, grapes5
var strawberry1, strawberry2, strawberry3, strawberry4, strawberry5
var boy, boyIMG
var sling1
var backgroundIMG
var bubble, bubbleIMG
var fruit, fruitIMG


function preload()
{
	boyIMG = loadImage("boy.png")
  backgroundIMG = loadImage("background.jpg")
  fruitIMG = loadImage("oooohYeah.gif")
	bubbleIMG = loadImage("giphy.gif")
}

function setup() {
	createCanvas(2300, 500);
   

	engine = Engine.create();
	world = engine.world;



	boy = createSprite(170, 350)
	boy.addImage(boyIMG)
	boy.scale = 0.2

	bubble = createSprite(220, 100)
	bubble.addImage(bubbleIMG)
  bubble.scale = 0.7

  fruit = createSprite(420, 150)
	fruit.addImage(fruitIMG)
  fruit.scale = 0.15
  fruit.visible=false;
  
  

	//Create the Bodies Here.
	ground1 = new Ground(1150, 490, 2300, 20)
	
	tree1 = new Tree(700, 280)
	tree2 = new Tree(1000, 280)
	tree3 = new Tree(1300, 280)
	tree4 = new Tree(1600, 280)
	tree5 = new Tree(1900, 280)

	mango1 = new Mango(650,200)
	mango2 = new Mango(700,250)
	mango3 = new Mango(760,200)
	mango4 = new Mango(730,150)
	mango5 = new Mango(600,240)

	apple1 = new Apple(950,200)
  apple2 = new Apple(1000,250)
	apple3 = new Apple(1060,200)
	apple4 = new Apple(1030,150)
	apple5 = new Apple(900,240)

	banana1 = new Banana(1250,200)
	banana2 = new Banana(1300,250)
	banana3 = new Banana(1360,200)
	banana4 = new Banana(1330,150)
	banana5 = new Banana(1200,240)

	grapes1 = new Grapes(1550,200)
	grapes2 = new Grapes(1600,250)
	grapes3 = new Grapes(1660,200)
	grapes4 = new Grapes(1630,150)
	grapes5 = new Grapes(1500,240)

	strawberry1 = new Strawberry(1850,200)
	strawberry2 = new Strawberry(1900,250)
	strawberry3 = new Strawberry(1960,200)
	strawberry4 = new Strawberry(1930,150)
	strawberry5 = new Strawberry(1800,240)

	stone1 = new Stone(150, 200)
	
	sling1 = new Sling(stone1.body,{x:60 , y:220})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  
  

    background(backgroundIMG);


    
   
  
  
  drawSprites();

  if(frameCount % 200 === 0){
    fruit.visible=true;
 }

 fill("white")
 textSize(24);
 text("A boy needs your help in plucking the fruits. He has a stone that he will give to you to do the same.", 750, 30)
 text("But after sometime, he wants to check that you have not lost it . So, whenever an avacado appear on your screen, press space to give him back and then continue with your work.", 350, 60)
  
  ground1.display();
  
  tree1.display();
  tree2.display();
  tree3.display();
  tree4.display();
  tree5.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple5.display();
  banana1.display();
  banana2.display();
  banana3.display();
  banana4.display();
  banana5.display();
  grapes1.display();
  grapes2.display();
  grapes3.display();
  grapes4.display();
  grapes5.display();
  strawberry1.display();
  strawberry2.display();
  strawberry3.display();
  strawberry4.display();
  strawberry5.display();
  stone1.display();
  sling1.display();

  
  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);

  detectCollision(stone1, apple1);
  detectCollision(stone1, apple2);
  detectCollision(stone1, apple3);
  detectCollision(stone1, apple4);
  detectCollision(stone1, apple5);

  detectCollision(stone1, banana1);
  detectCollision(stone1, banana2);
  detectCollision(stone1, banana3);
  detectCollision(stone1, banana4);
  detectCollision(stone1, banana5);

  detectCollision(stone1, grapes1);
  detectCollision(stone1, grapes2);
  detectCollision(stone1, grapes3);
  detectCollision(stone1, grapes4);
  detectCollision(stone1, grapes5);

  detectCollision(stone1, strawberry1);
  detectCollision(stone1, strawberry2);
  detectCollision(stone1, strawberry3);
  detectCollision(stone1, strawberry4);
  detectCollision(stone1, strawberry5);

  textSize (24)
  fill ("black")
  stroke ("black")
  text("Fruits are ", 150, 60)
  text("nature's candy!!", 130, 90)

  
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY})
  }
  
function mouseReleased(){
	  sling1.fly();
  }

function detectCollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.radius + lstone.radius){
	  Matter.Body.setStatic(lmango.body, false);
	}
  
  }
function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone1.body, {x:60 , y:220 })
    sling1.attach(stone1.body)
    fruit.visible=false;
  }
 
}







