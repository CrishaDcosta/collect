var movingRect, fixedRect;
var block1, block2, block3, block4;

function setup() {
  createCanvas(800, 400);
  movingRect = createSprite(100, 200, 30, 40);
  fixedRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";

  movingRect.debug = true;
  fixedRect.debug = true;

  block1 = createSprite(100, 100, 50, 50);
  block2 = createSprite(300, 100, 50, 50);
  block3 = createSprite(500, 100, 50, 50);
  block4 = createSprite(700, 100, 50, 50);
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (istouching(movingRect, block2)) {
    movingRect.shapeColor = "red";
    block2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "yellow";
    block2.shapeColor = "yellow";
  }
  drawSprites();
}

