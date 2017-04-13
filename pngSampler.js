//Bird sampler
 
//variables to hold sound and images
var one;
var two;
var three;
var img1;
var img2;
var img3;

//arrays that pair the sound to each image
var parrot = [];
var hummingbird = [];
var dove = [];

//array that stores each sound and image pair
var birdArray = [];

//array that contains all the bird objects with image, sound, x and y positions, and size to be dislayed and activated
var birdList = [];

//the size of the birds (square)
var birdWidth;

//The number of birds to be displayed in the grid
var birdNo = 16;

//load the sound and images into the variables
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

	//define the sound and image pairs
	parrot = [one, img1];
	dove = [two, img2];
	hummingbird = [three, img3];

	//populate the birdArray with the pairs
	birdArray = [parrot, dove, hummingbird];

	//ERROR HERE IN LOGIC - this only finds the size if they were in a straight line, if there are 16 birds total,
	//you should be dividing the screen by 4 not 16 as there should be four rows of four birds? this isn't the issue
	// with them not displaying but it means they won't display right. 
	
	//define the size of the birds by the size of the screen and the number of birds to fit inside it
	birdWidth = windowWidth / birdNo;

	//For loop to run for how many birds there are
	for (var i = 0; i <= birdNo; i++) {
		//create columns of birds, x value defined by the width
		for (var x = 0; x < windowWidth; x += birdWidth) {
			//y values defined by the height within each x value
			for (var y = 0; y < windowHeight; y += birdWidth) {
				//for each x y intersection draw a new random number
				var thisBird = random(2);
				//which then defines which sound and image pair is pushed into the bird object alongside the size and 
				//position
				birdList[i]= new Bird(birdArray[thisBird[0]], birdArray[thisBird[1]], x, y, birdWidth, birdWidth);
			}
		
		print(birdList[i]);
		}
	
	}
	
}

function draw() {

	background(255);

	//In the draw loop iterate through the list of bird objects and activate their functions (display and play sound)
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

//bird object constructor function
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




	




  


