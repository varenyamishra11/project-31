var startBobPositionX,startBobPositionY;
var bob1,bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;
var roof1,bobDiameter;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

/*	bob1 = new Bob(400,500,1);
	bob2 = new Bob(350,500,5);
	bob3 = new Bob(300,500,5);
	bob4 = new Bob(450,500,5);
	bob5 = new Bob(500,500,5);
*/
	roof1 = new Roof (width/2,height/4,width/6,20);

	  bobDiameter=40;
	  startBobPositionX=width/2;
	  startBobPositionY=height/4+500
	  bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
	  bob2=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
	  bob3=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
	  bob4=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
	  bob5=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter)

	string1= new Strings(bob1.body,roof1.body,-bobDiameter*2-40,0);
	string2= new Strings(bob2.body,roof1.body,-bobDiameter,0);
	string3= new Strings(bob3.body,roof1.body,roof1.width/9,0);
	string4= new Strings(bob4.body,roof1.body,-bobDiameter*2,0);
	string5= new Strings(bob5.body,roof1.body,roof1.width/4,0);
   
	
	Engine.run(engine);
  
}


function draw() {    
  rectMode(CENTER);
  background(255);
 // string1.display();
  /*string2.display();
  string3.display();
 
  */
  roof1.display();

  bob1.display();
  bob5.display();
  bob4.display();
  bob3.display(); 
  bob2.display();

string1.display();
string2.display();
string3.display();
string4.display();
string5.display();

 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:300,y:-300});
		
	}
	
}


