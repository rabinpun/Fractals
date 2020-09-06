var angle = 0;
var slider;

function setup() {
  createCanvas(1370, 700);
  
 
  t=50;
  s=0;
}

function draw() {
  
  
	
	background(s*3, s*5, s*7);
  angle = s;
  s+=0.01;
  stroke(255);
  textSize(70);
  text('Rabin Pun', 1000, 100);
  
  fill(t*10, t*20, t*30);
  translate(650, height);
 
   branch(250);
   if(t<255){
    t+=10;
   }
   else if(t<5){
    t=255;
   }
   else{
     t=0;
   }
   
   
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }

  //line(0, 0, 0, -len * 0.67);
}
