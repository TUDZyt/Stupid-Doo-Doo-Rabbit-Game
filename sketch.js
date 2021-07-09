//Side notes for teacher: I was gonna add a score system and print the score in the console window 
//every time you earn a point. Leaves were one point and apples were two points. But the game 
//became a black screen when I added it. Even when I made them destroy when it touched the rabbit,
//it still did the same thing so... ¯\_(ツ)_/¯



var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var leaf
var aol

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup()
{
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function appleSpawn()
{
  apple = createSprite(random(50, 350), 40, 10, 10)
  apple.scale = 0.1
  apple.addImage(appleImg)
  apple.velocityY = 4
}

function leafSpawn()
{
  leaf = createSprite(random(50, 350), 40, 10, 10)
  leaf.scale = 0.1
  leaf.addImage(leafImg)
  leaf.velocityY = 4
}

function draw() 
{
  background(0);

  aol = Math.round(random(1,2))

  if (frameCount % 80 === 0)
  {
    if (aol === 1)
    {
      appleSpawn()
    }
    else if (aol == 2)
    {
      leafSpawn()
    }
  }
  
  rabbit.x = mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
