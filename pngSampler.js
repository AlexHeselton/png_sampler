//Bird sampler

/////
//To do
// png image instead of drawing, + sound
// connect image to bounding box 
// break down into a function 

var rx;
var ry;
var rh;
var rw;

var onex;
var oney;


var one;
var two;
var three;
var img1;
var img2;
var img3;

function preload() {
	one = loadSound("https://cdn.rawgit.com/AlexHeselton/png_sampler/df50637e/one.wav");
	two = loadSound("https://cdn.rawgit.com/AlexHeselton/png_sampler/df50637e/two.wav");
	three = loadSound("https://cdn.rawgit.com/AlexHeselton/png_sampler/df50637e/three.wav");
	img1 = loadImage("https://cdn.rawgit.com/AlexHeselton/png_sampler/2798f14c/bird1.png");
	img2 = loadImage("https://cdn.rawgit.com/AlexHeselton/png_sampler/2798f14c/bird2.png");
	img3 = loadImage("https://cdn.rawgit.com/AlexHeselton/png_sampler/2798f14c/bird3.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight); 
	ellipseMode(RADIUS);
	var onex = 10;
	var oney = 10;
}

function draw() {

	background(255);

	image(img1, onex, oney);
	if ((mouseX > onex) && (mouseX < onex + 799) && (mouseY > oney) && (mouseY < oney + 999) && (mouseIsPressed)) {
	 	one.play();
	}




	// //rectangle
	// if ((mouseX > rx) && (mouseX < rx + rw) && (mouseY > ry) && (mouseY < ry + rh) && (mouseIsPressed)) {
	// 	fill(255);
	// 	one.play();
	// }
	// else if ((mouseX > rx) && (mouseX < rx + rw) && (mouseY > ry) && (mouseY < ry + rh)) {
	// 	fill(125); 
	// }
	// else {
	// 	fill(0);
	// }
	// rect(rx, ry, rw, rh);

	// //Circle
	// cd = dist(mouseX, mouseY, cx, cy);
	// if ((cd < cRadius) && (mouseIsPressed)) {
	// 	fill(255);
	// 	two.play();
	// }
	// else if (cd < cRadius) {
	// 	fill(125);
	// }
	// else {
	// 	fill(0);
	// }
	// ellipse(cx, cy, cRadius);


	
}



  


