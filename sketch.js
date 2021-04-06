
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5;
var world,boy;
var sling,stone;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100, 100, 30);
	mango2= new Mango(1100, 200, 30);
	mango3=new Mango(1000, 100, 30)
	mango4= new Mango(1180, 130, 30)
	mango5=new Mango(1000, 180, 30)
;
	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	stone=new Stone(225,410,20);
	sling=new Sling(stone.body,{x:225,y:410});
	
	

	Engine.run(engine);

}

function draw() {



  background(230);
  
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling.display();
  stone.display();

  groundObject.display();

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if(distance<=lstone.r+lmango.r){
		Matter.Body.setStatic(lmango.body, false)
	}

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:225,y:410})
		sling.attach(stone.body);
	}
}