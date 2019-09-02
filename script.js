var square;
var lng = 100;		//lenght of square
var radius = 10;	//radius of points
var angle = 0.005;
var incr = 0.001;

function SQRT(){
	
	point = [];
	point[0] = createVector(createVector(1, 1, 1), 1, 1);
	point[1] = createVector(createVector(-1, 1, 1), 1, 1);
	point[2] = createVector(createVector(-1, -1, 1), 1, 1);
	point[3] = createVector(createVector(1, -1, 1), 1, 1);
	point[4] = createVector(createVector(1, 1, -1), 1, 1);
	point[5] = createVector(createVector(-1, 1, -1), 1, 1);
	point[6] = createVector(createVector(-1, -1, -1), 1, 1);
	point[7] = createVector(createVector(1, -1, -1), 1, 1);
	point[8] = createVector(createVector(1, 1, 1), -1, 1);
	point[9] = createVector(createVector(-1, 1, 1), -1, 1);
	point[10] = createVector(createVector(-1, -1, 1), -1, 1);
	point[11] = createVector(createVector(1, -1, 1), -1, 1);
	point[12] = createVector(createVector(1, 1, -1), -1, 1);
	point[13] = createVector(createVector(-1, 1, -1), -1, 1);
	point[14] = createVector(createVector(-1, -1, -1), -1, 1);
	point[15] = createVector(createVector(1, -1, -1), -1, 1);
	point[16] = createVector(createVector(1, 1, 1), 1, -1);
	point[17] = createVector(createVector(-1, 1, 1), 1, -1);
	point[18] = createVector(createVector(-1, -1, 1), 1, -1);
	point[19] = createVector(createVector(1, -1, 1), 1, -1);
	point[20] = createVector(createVector(1, 1, -1), 1, -1);
	point[21] = createVector(createVector(-1, 1, -1), 1, -1);
	point[22] = createVector(createVector(-1, -1, -1), 1, -1);
	point[23] = createVector(createVector(1, -1, -1), 1, -1);
	point[24] = createVector(createVector(1, 1, 1), -1, -1);
	point[25] = createVector(createVector(-1, 1, 1), -1, -1);
	point[26] = createVector(createVector(-1, -1, 1), -1, -1);
	point[27] = createVector(createVector(1, -1, 1), -1, -1);
	point[28] = createVector(createVector(1, 1, -1), -1, -1);
	point[29] = createVector(createVector(-1, 1, -1), -1, -1);
	point[30] = createVector(createVector(-1, -1, -1), -1, -1);
	point[31] = createVector(createVector(1, -1, -1), -1, -1);
	

	this.makePoints = function(){
		for(var i = 0; i<32; i++){
			ellipse(lng*point[i].x.x, lng*point[i].x.y, radius, radius);
		}
	}

	this.makeLines = function(){
		for(var i = 0; i<32; i++){
			if((i === 3)||(i === 7) || (i === 11) || (i === 15) || (i === 19) || (i === 23) || (i === 27) || (i === 31)){
				stroke(255);
				line(lng*point[i].x.x, lng*point[i].x.y, lng*point[i-3].x.x, lng*point[i-3].x.y);
			}
			else{
				stroke(255);
				line(lng*point[i].x.x, lng*point[i].x.y, lng*point[i+1].x.x, lng*point[i+1].x.y);
			}
			if((i < 4)||((i > 7) && (i <12)) || ((i > 15) && (i < 20)) || ((i > 23) && (i<28))  ){
				line(lng*point[i].x.x, lng*point[i].x.y, lng*point[i+4].x.x, lng*point[i+4].x.y);
			}
			if((i < 8) || ((i > 15) && (i < 24)) ){
				line(lng*point[i].x.x, lng*point[i].x.y, lng*point[i+8].x.x, lng*point[i+8].x.y);
			}
			if(i < 16){
				line(lng*point[i].x.x, lng*point[i].x.y, lng*point[i+16].x.x, lng*point[i+16].x.y)
			}
		}
	}

	this.rotationZ = function(){
		// angle += incr;
		for (var i = 0; i < 32; i++){
			var x = point[i].x.x;
			var y = point[i].x.y;
			point[i].x.x = x*cos(angle) - y*sin(angle);
			point[i].x.y = x*sin(angle) + y*cos(angle);
		}
	}

	this.rotationX = function(){
		// angle += incr;
		for (var i = 0; i < 32; i++){
			var z = point[i].x.z;
			var y = point[i].x.y;
			point[i].x.y = y*cos(angle) - z*sin(angle);
			point[i].x.z = y*sin(angle) + z*cos(angle);
		}
	}

	this.rotationY = function(){
		// angle += incr;
		for (var i = 0; i < 32; i++){
			var x = point[i].x.x;
			var z = point[i].x.z;
			point[i].x.x = x*cos(angle) + z*sin(angle);
			point[i].x.z = (-x)*sin(angle) + z*cos(angle);
		}
	}

	this.rotationWz = function(){
		// angle += incr;
		for (var i = 0; i < 32; i++){
			var w = point[i].y;
			var z = point[i].x.z;
			point[i].x.z = z*cos(angle) - w*sin(angle);
			point[i].y = z*sin(angle) + w*cos(angle);
		}
	}
	this.rotationWx = function(){
		// angle += incr;
		for (var i = 0; i < 32; i++){
			var w = point[i].y;
			var x = point[i].x.x;
			point[i].x.x = x*cos(angle) + w*sin(angle);
			point[i].y = (-x)*sin(angle) + w*cos(angle);
		}
	}
	this.rotationVw = function(){
		for (var i = 0; i < 32; i++){
			var w = point[i].y;
			var v = point[i].z;
			point[i].y = w*cos(angle) - v*sin(angle);
			point[i].z = w*sin(angle) + v*cos(angle);
		}
	}
	this.rotationVx = function(){
		for (var i = 0; i < 32; i++){
			var x = point[i].x.x;
			var v = point[i].z;
			point[i].x.x = x*cos(angle) + v*sin(angle);
			point[i].z = (-x)*sin(angle) + v*cos(angle);
		}
	}
}





function setup(){

	createCanvas(600, 600);
	background(0);
	square = new SQRT();
}

function draw(){
	background(0);
	translate(300,300);
	square.makePoints();
	square.makeLines();
	square.rotationY();
	square.rotationX();
	square.rotationZ();
	square.rotationWx();
	//square.rotationWz();
	square.rotationVx();
	//square.rotationVw();
	

}