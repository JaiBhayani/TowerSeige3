const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var sground1, sground2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16
var box17, box18, box19, box20, box21, box22, box23, box24, box25;
var hexagon;
var score = 0;

function preload(){
    //background(225,225,225);
    polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);
   platform = new Ground(600, 250, 300, 20);
   //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:100,y:200});

    box3  = new Box(580,200,30,30);
    box4  = new Box(610,200,30,30);
    box2  = new Box(640,200,30,30);
    box1  = new Box(670,200,30,30);
    box5  = new Box(700,200,30,30);
    box6  = new Box(595,170,30,30);
    box7  = new Box(625,170,30,30); 
    box8  = new Box(655,170,30,30);
    box9  = new Box(685,170,30,30);
    box10 = new Box(605,140,30,30);
    box11 = new Box(635,140,30,30);
    box12 = new Box(665,140,30,30);
    box13 = new Box(635,110,30,30);
}
function draw(){
    Engine.update(engine);

    background(225,225,225);

    textSize(20)
    stroke("red")
    text("PRESS SPACE FOR A SECOND CHANCE  ",450,100);
    text("SCORE:  " +score,750,40);

    ground.display();


    platform.display();

    slingShot.display();

    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    
    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);

}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x : mouseX , y : mouseY})
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
if(keyCode ===32){
    slingShot.attach(this.ball);
}
}