//Bird sampler

/////
//To do
// color on right bird - order of display changed fixed this!
// fade properly - brain hurts too much 
// function that places them in regards to screen width
// size changes according to screen size 

var one;
var two;
var three;
var img1;
var img2;
var img3;

var birdList = [];
var sound =[];
var img = [];

// var parrot;
// var hummingbird;
// var dove;

var birdWidth;
var height; 

var birdNo = 16;
var birdXPos;
var birdYPos;
var gridSize;

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

	sound = [one, two, three];
	img = [img1, img2, img3];
	print(img);
	print(sound);

	birdWidth = windowWidth / birdNo;
	// parrot = new Bird(img1, one, 0, 0, birdWidth, birdWidth);
	// dove = new Bird(img2, two, 400, 0, birdWidth, birdWidth);
	// hummingbird = new Bird(img3, three, 800, 0, birdWidth, birdWidth);
	// birdList = [parrot, dove, hummingbird];
	// birdList[random(2)];

	gridSize = 200;

	for (var i = 0; i <= birdNo; i++) {
		for (var x = gridSize; x <= windowWidth - gridSize; x += gridSize) {
			for (var y = gridSize; y < windowHeight - gridSize; y += gridSize) {
				birdList[i]= new Bird(img[Math.floor(Math.random() * img.length)], sound[Math.floor(Math.random() * sound.length)], x, y, birdWidth, birdWidth);
			}
		
		print(birdList[i]);
		}
	
	}
	
}

function draw() {

	background(255);


	for (i = 0; i < birdNo; i++) {
		birdList[i].display();
		birdList[i].play();
	}

	print(birdWidth);
	//print(birdWidth);

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
	this.active = 0

	this.display = function() {
		if (this.activated()) {
			tint(0, 150, 25, (frameCount % 30)*10);
		}
		else {
			noTint();
		}
		image(this.img, this.x, this.y, this.w, this.h);
	}

	this.play = function() {
		if ((mouseX > this.x) && (mouseX < this.x + this.w) && (mouseY > this.y) && (mouseY < this.y + this.h) && (mouseIsPressed)) {
			this.sound.play();
		}
	}

	this.activated = function() {
		if ((mouseX > this.x) && (mouseX < this.x + this.w) && (mouseY > this.y) && (mouseY < this.y + this.h) && (mouseIsPressed)) {
			return true
		}
		else {
			return false
		}
	}

}




	




  


