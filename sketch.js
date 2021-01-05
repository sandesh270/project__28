const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("images/bg.png");
    boyImg = loadImage("images/boy.png");
    treeImg = loadImage("images/tree.png");
    basketImg = loadImage("images/basket.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    mango1 = new Mango(970, 150);
    mango2 = new Mango(1170, 150);
    mango3 = new Mango(900, 85);
    mango4 = new Mango(1000, 50);
    mango5 = new Mango(1080, 100);
   

    stone = new Stone(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(stone.body,{x:280, y:220},0.04);
    mango1S = new SlingShot(mango1.body,{x:mango1.body.position.x, y:mango1.body.position.y},2);
    mango2S = new SlingShot(mango2.body,{x:mango2.body.position.x, y:mango2.body.position.y},2);
    mango3S = new SlingShot(mango3.body,{x:mango3.body.position.x, y:mango3.body.position.y},2);
    mango4S = new SlingShot(mango4.body,{x:mango4.body.position.x, y:mango4.body.position.y},2);
    mango5S = new SlingShot(mango5.body,{x:mango5.body.position.x, y:mango5.body.position.y},2);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    image(treeImg,800,10,390,390);   
    image(boyImg,150,150,150,250);
    image(basketImg,380,250,150,150)
    //Matter.Body.setStatic(mango1.body,true);
    strokeWeight(4);
    ground.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();

    stone.display();
    //log6.display();
    slingshot.display(); 
    if(mango1.body.speed>3&&frameCount>34){
      mango1S.fly();
      mango1.body.position.x = 380+50+10;
      mango1.body.position.y = 250+60+30-10;
      Matter.Body.setStatic(mango1.body,true)
    }
    if(mango2.body.speed>3&&frameCount>34){
        mango2S.fly();
        mango2.body.position.x = 380+50+20+10;
        mango2.body.position.y = 250+60+30-10;
        Matter.Body.setStatic(mango2.body,true)
      }
      if(mango3.body.speed>3&&frameCount>34){
        mango3S.fly();
        mango3.body.position.x = 380+50+20+10;
        mango3.body.position.y = 250+60+30-10;
        Matter.Body.setStatic(mango3.body,true)
      }
      if(mango4.body.speed>3&&frameCount>34){
        mango4S.fly();
        mango4.body.position.x = 380+50+20;
        mango4.body.position.y = 250+60+30-10;
        Matter.Body.setStatic(mango4.body,true)
      }
      if(mango5.body.speed>3&&frameCount>34){
        mango5S.fly();
        mango5.body.position.x = 380+50+20;
        mango5.body.position.y = 250+60+30-10;
        Matter.Body.setStatic(mango5.body,true)
      }
    
    console.log(mango1.body.speed)
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    console.log("hello world")
  slingshot.fly();  
}
function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(stone.body, {x: 200 , y: 100});
        if(stone.body.position.x===200&&stone.body.position.y===100){
        slingshot.attach(stone.body);
        }
    }
}