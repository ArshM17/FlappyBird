var side,x,y,g,gameMode,v;
var pipes = [];
function setup() {
  createCanvas(400, 400);
  radius = 25;
  x = 0;
  g = 0.2;
  y = height/2-radius/2;
  v = 0;
}

function draw() {
  if(gameMode!=1){
    background(100,200,255);
    fill(255,0,0);
    circle(width/2-35,y,radius);
    y+=sin(x)
    x+=0.15;
  }else{
    background(100,200,255);
    fill(255,0,0);
    circle(width/2-35,y,radius);
    displayPipes();
    x+=0.15;
    v+=g;
    y+=v; 
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW || keyCode == 32) {
    gameMode = 1;
    v=-4;
  }
}

function displayPipes(){
  let pipeLength = random(20,height-40);
  pipes.push([width,pipeLength]);
  for(let i = 0;i<pipes.length;i++){
    fill(0,255,0);
    rect(pipes[i][0],0,50,pipes[i][0]); 
    rect(pipes[i][0],pipeLength+40,50,height-pipes[i][0]-40); 
  }
}

function updatePipes(){
  
}

