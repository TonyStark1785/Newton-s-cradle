
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var roof, bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(400, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Roof(190, 150, 250, 20)
	bob1=new Bob(100, 300, 20);
	bob2=new Bob(145, 300, 20);
	bob3=new Bob(190, 300, 20);
	bob4=new Bob(235, 300, 20);
	bob5=new Bob(280, 300, 20);
	rope1=new Rope(bob1.body, {x: 100, y:150});
	rope2=new Rope(bob2.body, {x: 145, y: 150});
	rope3=new Rope(bob3.body, {x: 190, y: 150});
	rope4=new Rope(bob4.body, {x: 235, y: 150});
	rope5=new Rope(bob5.body, {x: 280, y: 150});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bob5.body, {x: mouseX, y: mouseY})
}



    