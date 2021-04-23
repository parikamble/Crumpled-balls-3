const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dustbinObj, paperObject,groundObject, launcherObject	
var world;
var launchingForce=100;
var lastMouseX=null;
var lastMouseY=null;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	PaperObject=new Paper(200,450,70);
	GroundObject=new Ground(width/2,670,width,20);
	DustbinObject=new Dustbin(1200,650);
	//powerdisp=new powerdisplay(200,200,100);
	LauncherObject=new Launcher(PaperObject.body,{x:300,y:300})
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  //rectMode(CENTER);
  background(230);
 
  Engine.update(engine)
  
    PaperObject.display();
 
  
  GroundObject.display();
  DustbinObject.display();
  //powerdisp.display(launchingForce);
  LauncherObject.display();
  

}

/*function keyPressed() {
	
  	if (keyCode === UP_ARROW) 
  	{
    	if(keyIsDown(70))
    	{
    		
    		launchingForce=launchingForce+5;
    	}
    
  	}
  	if (keyCode === DOWN_ARROW) 
  	{
    	if(keyIsDown(70))
    	{
    		
    		launchingForce=launchingForce-5;
    	}
    
  	}
  	if (keyCode === 13) 
  	{
  	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:launchingForce,y:-launchingForce});
  	}
  //console.log(launchingForce);
}*/



function mouseDragged()
{
	Matter.Body.setPosition(PaperObject.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	LauncherObject.fly();
 
}
