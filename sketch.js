var platform, platformGroup;
var mario;
var wall;
var obstacle;
var flag;
var marioAnimation, platformAnimation, wallAnimation, obstacleAnimation, flagAnimation;

function preload()
{
  marioAnimation = loadAnimation("images/Capture1.png", "images/Capture3.png", "images/Capture4.png");
  platformAnimation = loadImage("images/ground.png");
  wallAnimation = loadImage("images/wall.png");
  obstacleAnimation = loadImage("images/obstacle1.png");
  flagAnimation = loadImage("images/Flag.png");
}

function setup() 
{
  createCanvas(displayWidth, 700);

  var xDistance = 0;
  var gap;
  mario = new Player();
  platformGroup = new Group();

  for(var i=0; i<20; i++)
  {
    platform = new Platform(xDistance);
    gap = random([50, 70]);
    xDistance = xDistance + platform.sptW + gap;
    platformGroup.add(platform.spt);
    
    if(i%3 === 0)
    {
      wall = new Wall(xDistance);
      platformGroup.add(wall.spt);
    }
    if(i%4 === 0)
    {
      obstacle = new Obstacle(xDistance);
    }
  }
  flag = createSprite(xDistance-180, height-280);
  flag.addImage("flag", flagAnimation);
  flag.scale = 0.07;
}

function draw() 
{
  background('skyblue');  

  translate(-mario.spt.x + width/2, 0);

  mario.applyGravity();
  mario.spt.collide(platformGroup);

  if(keyDown("left"))
  {
    mario.moveLeft();
  }
  if(keyDown("right"))
  {
    mario.moveRight();
  }
  if(keyDown("up") && mario.spt.velocityY === 0)
  {
    mario.jump();
  }

  drawSprites();
}




















