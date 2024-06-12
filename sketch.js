function setup() {
    createCanvas(400, 400);
    background("white")
  }
  
  function draw() {
    stroke("rgb(0,244,255)");
    fill("rgb(14,0,255)");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }