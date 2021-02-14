const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var block1,block2,block3,block4,block5;
var block6, block7, block8, block9;
var block10, block11, block12;
var block13, block14;
var block15
var polygon; 
var slingshot;
var stand1;
var polygonImage;

var gameState = "not shot";

function preload(){
    
}
function setup(){
    polygonImage = loadImage("polygon.png");

    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,590,1200,20);

    stand1 = new Ground(600, 500, 200, 20);

    // level 1
    block1 = new Block(520,470,40,40);
    block2 = new Block(560,470,40,40);
    block3 = new Block(600,470,40,40);
    block4 = new Block(640,470,40,40);
    block5 = new Block(680,470,40,40);

    // level 2
    block6 = new Block(540,430,40,40);
    block7 = new Block(580,430,40,40);
    block8 = new Block(620,430,40,40);
    block9 = new Block(660,430,40,40);

    //level 3
    block10 = new Block(560,390,40,40);
    block11 = new Block(600,390,40,40);
    block12 = new Block(640,390,40,40);

    // level 4
    block13 = new Block(580,350,40,40);
    block14 = new Block(620,350,40,40);

    // level 5
    block15 = new Block(600, 310, 40, 40);

    var options  = {
        isStatic: false, 
        restitution: 1,
        friction: .1,
        density: 1.2
    }
    polygon = Bodies.rectangle(200,400,40,40, options);

    World.add(world, polygon);

    slingshot = new Slingshot(this.polygon, {x:200,y:400});

    

}

function draw(){
    background(60, 38, 22);
    Engine.update(engine);
    // console.log(block1.visibility);
    // console.log(block2.visibility);
    // console.log(block3.visibility);
    // console.log(block4.visibility);
    // console.log(block5.visibility);
    // console.log(block15.visibility);


    ground1.display();

    stand1.display();

    // level 1
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    // level 2
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    // level 3
    block10.display();
    block11.display();
    block12.display();
    
    // level 4
    block13.display();
    block14.display();

    // level 5
    block15.display();

    imageMode(CENTER);
    image(polygonImage, this.polygon.position.x, this.polygon.position.y, 40, 40);

    slingshot.display();




    textSize(20);
    fill("cyan");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 200, 150);




}

function mouseDragged(){
    if(gameState === "not shot"){
        Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "shot";
}