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

var parrot;
var hummingbird;
var dove;

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
	parrot = new Bird(img1, one, 10, 10, 200, 200);
	dove = new Bird(img2, two, 220, 10, 200, 200);
	hummingbird = new Bird(img3, three, 440, 10, 200, 200);
}

function draw() {

	background(255);
	// for (i = 0; i < imgList.length; i++) {
	// 	imgList[i].display();
	// 	soundList[i].play();
	// }

	parrot.display();
	parrot.play();

	dove.display();
	dove.play();

	hummingbird.display();
	hummingbird.play();

}

function Bird(tempImg, tempSound, tempX, tempY, tempW, tempH) {
	this.img = tempImg;
	this.sound = tempSound;
	this.x = tempX;
	this.y= tempY;
	this.w = tempW;
	this.h = tempH;

	this.display = function() {
		image(this.img, this.x, this.y, this.w, this.h);
	}

	this.play = function() {
		if ((mouseX > this.x) && (mouseX < this.x + this.w) && (mouseY > this.y) && (mouseY < this.y + this.h) && (mouseIsPressed)) {
			this.sound.play();
		}
	}
}




	




  


