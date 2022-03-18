var bola

function setup() {
  createCanvas(500, 500)
  bola = createSprite(200, 300, 50, 50)
  bola.shapeColor= "blue"
}

function draw() {
  background(220) //rgb
  drawSprites()
}
