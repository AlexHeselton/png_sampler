//Sampler for Taurin


/////
//To do
// png image instead of drawing, + sound
// connect image to bounding box 
// break down into a function 
//

//rectangle variables
var rx;
var ry;
var rw = 80;
var rh = 60;

//circle variables
var cd;
var cx;
var cy;
var cRadius = 40;

//ellipse variables
var ed;
var ex;
var ey;
var eRadius = 40;
var startRadius = 40;
var maxRadius = 60;
var growthSpeed = 0.25;
var grow = false;

var one;
var two;
var three;

function preload() {
	one = loadSound("https://cdn.rawgit.com/AlexHeselton/sampler/e6eeedf3/one.wav");
	two = loadSound("https://cdn.rawgit.com/AlexHeselton/sampler/e6eeedf3/two.wav");
	three = loadSound("https://cdn.rawgit.com/AlexHeselton/sampler/e6eeedf3/three.wav");
}

function setup() {
	createCanvas(windowWidth, windowHeight); 
	ellipseMode(RADIUS);
	rx = windowWidth/4;
	ry = windowHeight/4;
	cx = (windowWidth/4) * 3;
	cy = windowHeight/4;
	ex = windowWidth/2;
	ey = (windowHeight / 4) * 3;
}

function draw() {

	background(255);
	//rectangle
	if ((mouseX > rx) && (mouseX < rx + rw) && (mouseY > ry) && (mouseY < ry + rh) && (mouseIsPressed)) {
		fill(255);
		one.play();
	}
	else if ((mouseX > rx) && (mouseX < rx + rw) && (mouseY > ry) && (mouseY < ry + rh)) {
		fill(125); 
	}
	else {
		fill(0);
	}
	rect(rx, ry, rw, rh);

	//Circle
	cd = dist(mouseX, mouseY, cx, cy);
	if ((cd < cRadius) && (mouseIsPressed)) {
		fill(255);
		two.play();
	}
	else if (cd < cRadius) {
		fill(125);
	}
	else {
		fill(0);
	}
	ellipse(cx, cy, cRadius);

	//ellipse
	// ed = dist(mouseX, mouseY, ex, ey);
	// if ((ed < eRadius) && (mouseIsPressed)) {
 //    	if (eRadius <= startRadius) {
 //        	eRadius += growthSpeed;
 //        	grow = true;
 //    	}
 //    	else if ((eRadius > startRadius) && (eRadius < maxRadius)) {
 //        	if (grow == true) {
 //          	eRadius += growthSpeed;
 //        	}
 //        }
 //        else {
 //          	eRadius -= growthSpeed;
 //        }
 //    }
 //    else {
 //    	if  (eRadius > startRadius) {
 //    		eRadius -= growthSpeed;
 //        	grow = false;	
 //    	}
 //    	else {
 //    		eRadius = startRadius;
 //    	}
        
 //    }
 //    ellipse(ex, ey, eRadius);
 
}



  


