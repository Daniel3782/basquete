
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var options ={isStatic:true} 
bt = createImg ("botao-.png")
bt.position(260,260)
bt.size (50,50)
bt.mouseClicked(force)
bt2 = createImg ("botao-removebg-preview.png")
bt2.position(300,280)
bt2.size (50,50)
bt2.mouseClicked(force2)
 ground = Bodies.rectangle (0, 380, 400, 20,options)
 ground2 = Bodies.rectangle (200, 300, 200, 20,options)
 parede1 = Bodies.rectangle (0,0,20,400,options)
 parede2 = Bodies.rectangle (380,0,20,400,options)
 var options2 = {restitution:0.5}
 bola = Bodies.circle (50,20,30,options2)
 cesta1 = Bodies.rectangle (300,60,10,40,options)
 cesta2 = Bodies.rectangle (350,60,10,40,options)
 cesta3 = Bodies.rectangle (300,100,60,10,options)
 World.add(world,bola)
 World.add(world,parede2)
 World.add(world,parede1)
 World.add(world,ground)
 World.add(world,cesta1)
 World.add(world,ground2)
 World.add(world,cesta2)
 World.add(world,cesta3)
}
function force (){
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0,y:-0.1})
}
function keyPressed(){
   if (keyCode===UP_ARROW){
    Matter.Body.applyForce(bola,{x:0,y:0},{x:0.01,y:-0.01})

   }

}
function force2 (){
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0.1,y:0})
}
function draw() 
{
  background(51);
  Engine.update(engine);
  fill ("red")
  rect(ground.position.x,ground.position.y,400,20)
  fill ("red")
  rect(ground2.position.x,ground2.position.y,200,20)
fill ("red")
  rect(parede1.position.x,parede1.position.y,20,400)
  fill ("red")
  rect(parede2.position.x,parede2.position.y,20,400)
 fill ("orange")
  ellipse (bola.position.x,bola.position.y, 30)

  rect(cesta1.position.x,cesta1.position.y,10,40)

  rect(cesta2.position.x,cesta2.position.y,10,40)

  rect(cesta3.position.x,cesta3.position.y,60,10)

}

