//Bird sampler

/////
//To do
// png image instead of drawing, + sound
// connect image to bounding box 
// break down into a function 

var one;
var two;
var three;
var img1;
var img2;
var img3;

var imgList = [];
var soundList = [];

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
	new bird = (img1, one, 10, 10, 400, 400);
}

function draw() {

	background(255);
	// for (i = 0; i < imgList.length; i++) {
	// 	imgList[i].display();
	// 	soundList[i].play();
	// }

	bird.display();
	bird.play();
	

}

function drawBird(tempImg, tempSound, tempX, tempY, tempW, tempH) {
	this.img = tempImg;
	this.sound = tempSound;
	this.x = tempX;
	this.y= tempY;
	this.w = tempW;
	this.h = tempH;

	this.display = function() {
		imgage(this.img, this.x, this.y, this.w, this.h);
	}

	this.play = function() {
		if ((mouseX > this.x) && (mouseX < this.x + this.w) && (mouseY > this.y) && (mouseY < this.y + this.h) && (mouseIsPressed)) {
			this.sound.play();
		}
	}
}




	




  


