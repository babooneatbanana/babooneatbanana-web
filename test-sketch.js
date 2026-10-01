var word = 'I TRIED'
var count = 0;
function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220, 140, 60);
  var movement = count;
  var position = 


  // Text
  fill(237, 40, 30)
  textSize(48)
  text(word, 200, 200)
  rect(0 + movement*2, 50, 50, 50);
  noStroke();
  fill(0, 255, 255)
  
  if (count > 180)
    rect(400 - movement + 180, 50, 50, 50);
    noStroke();
    fill(0, 255, 255)

    //rect 2
  rect(0 + movement*4, 250 - movement, 50, 50);
  noStroke();
  fill(0, 25, 255)

    //circle 1
  if (count < 200)
    ellipse(25 + movement, 175 + movement*0.25, 50, 50);
    noStroke();
    fill(100, 84, 150)
  if (count > 200)
    ellipse(25 + movement, movement*0.25, 50, 50);
    noStroke();
    fill(200, 84, 150)

  count = count + 1; 
}
