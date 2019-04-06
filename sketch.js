//var purple = {x:0,y:200,diameter:50};
var ball = {
	x:10,
	y:20,
	xspeed: 10,
	yspeed: 10
} ;

function setup(){
	createCanvas(400,600);
	
	

}

function draw(){
	b = map(ball.x,0,400,0,255);
	r = map(ball.x,0,400,255,0);
	g = map(ball.y,0,600,0,255);
	r = map(ball.y,0,600,255,0);
	background(r,g,b);

	

	display();
	bounce();
	move();

	

}
function mousePressed(){
	

}
function move(){
	ball.x = ball.x + ball.xspeed;
	ball.y = ball.y + ball.yspeed;

}
function bounce(){
	if(ball.x > width || ball.x < 0){
		ball.xspeed = ball.xspeed * -1;
	}
	if (ball.y > height || ball.y < 0){
		ball.yspeed = ball.yspeed * -1
	}
}
function display(){
	noStroke();
	fill(255,0,0,90)
	ellipse(ball.x,ball.y,40,40);

}