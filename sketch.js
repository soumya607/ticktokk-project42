function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200, 200);
  rotate(-90); 

  h = hour();
  m = minute();
  s = second();

  //arc for seconds
  strokeWeight(8);
  stroke(210,255,255);
  noFill();
  secAngle = map(s ,0 , 60, 0, 360);
  arc(0,0,280,280,0,secAngle);

  //arc for minutes
  stroke(255,0,0);
  minAngle = map(m ,0 , 60, 0, 360);
  arc(0,0,300,300,0,minAngle);

  //arc of hours
  stroke(0,0,255);
  hourAngle = map(h % 12,0 , 12, -90, 360);
  arc(0,0,320,320,0,hourAngle);

  //line for second angle
  push();
  rotate(secAngle);
  stroke(210,255,255);
  line(0,0,100,0);
  pop();

  //line for minute angle
  push();
  rotate(minAngle);
  stroke(255,0,0);
  line(0,0,70,0);
  pop();

  //line for hour angle
  push();
  rotate(hourAngle);
  stroke(0,0,255);
  line(0,0,50,0);
  pop();

  //fill (0);
  //noStroke();
  //text('current time:- \n ' + h +": "+ m +": "+ s , 370,100);

  stroke(255);
  point(0,0);

  drawSprites();
}