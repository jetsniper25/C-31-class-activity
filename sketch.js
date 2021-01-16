//Data Types in Javascript
//Numeric data type
var num = 400;
console.log(num);

//String - a sequence of characters enclosed by quotes
var str = "This is a string"
console.log(str);

//Boolean - true and false
var bool = true;
console.log(bool);

//Undefined - No value has been assigned to a variable
var object;
console.log(object);


//Null - means empty or nothing
object = null;
console.log(object);


//Array - a data type in which more than 1 value can be stored separated by commas
var arr1 = []; ///its an empty array
console.log(arr1);

var arr2 = [1,3,5,60];
console.log(arr2);
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2.length);

var arr3 = ["name", 345, true];
console.log(arr3);

var arr4 = [[3,5], [7,8], [9,10]];
console.log(arr4);
console.log(arr4[0][1]);

console.log(arr4[2][0]);

//push() -- add another item into an existing array
arr4.push([20,30]);
console.log(arr4);

//pop() -- remove the last item from  an array
arr4.pop();
console.log(arr4);




const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState='onsling';

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
   if (gameState==='onsling'){   
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   }
}


function mouseReleased(){
    slingshot.fly();
    gameState='Launch';
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
        gameState='onsling';
    }
}