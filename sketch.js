var angle = 0;
var slider;

function setup() {
  createCanvas(1370, 700);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  slider.position(10, 10);
  slider.style('width', '600px',);
}

function draw() {
	r=slider.value()*10;
	g=slider.value()*20;
	b=slider.value()*30;
	background(r, g, b);
  angle = slider.value();
  stroke(255);
  translate(650, height);
 
	 branch(250);
  
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
