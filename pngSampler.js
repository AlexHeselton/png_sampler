//Bird sampler

/////
//To do
// bird colors 

var one;
var two;
var three;
var img1;
var img2;
var img3;

var birdList = [];

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
	birdList = [parrot, dove, hummingbird];
}

function draw() {

	background(255);
	for (i = 0; i < birdList.length; i++) {
		birdList[i].display();
		birdList[i].play();
	}

	print((frameCount % 30)*10);

	// parrot.display();
	// parrot.play();

	// dove.display();
	// dove.play();

	// hummingbird.display();
	// hummingbird.play();

}

function Bird(tempImg, tempSound, tempX, tempY, tempW, tempH) {
	this.img = tempImg;
	this.sound = tempSound;
	this.x = tempX;
	this.y= tempY;
	this.w = tempW;
	this.h = tempH;
	this.active = false

	this.display = function() {
		image(this.img, this.x, this.y, this.w, this.h);
		if (this.activated() == 1) {
			tint((random(0,255)), 150, 25, (frameCount % 30)*10);
		}
		else {
			noTint();
		}
	}

	this.play = function() {
		if ((mouseX > this.x) && (mouseX < this.x + this.w) && (mouseY > this.y) && (mouseY < this.y + this.h) && (mouseIsPressed)) {
			this.sound.play();
			//change color
			

		}
	}

	this.activated = function() {
		if ((mouseX > this.x) && (mouseX < this.x + this.w) && (mouseY > this.y) && (mouseY < this.y + this.h) && (mouseIsPressed)) {
			return 1
		}
		else {
			return 0
		}
	}

}




	




  


