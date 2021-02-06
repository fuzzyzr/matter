const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var world, engine
function setup() {
  createCanvas(400,400);
engine=Engine.create()
world = engine.world

var e_options = {

  restitution:1.0
}

hello = Bodies.circle(300,100,50,e_options)
World.add(world,hello)


var g_options = {
  isStatic:true
}


ground =  Bodies.rectangle(200,400,800,50,g_options)
World.add(world,ground)
}

function draw() {
  background(0);  
Engine.update(engine)

rectMode(CENTER)
ellipseMode(RADIUS)
  ellipse(hello.position.x, hello.position.y,25,25)
  
  fill("green")
  rect(ground.position.x, ground.position.y, 800,50)





}