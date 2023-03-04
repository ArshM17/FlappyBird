var side,x,y,g,gameMode,v;
var isTouched = false;
var pipes = [];
var speed = 2;

function setup() {
  createCanvas(400, 400);
  radius = 24;
  x = 0;
  g = 0.4;
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
    updatePipes();
    displayPipes();
    checkGameOver();
    v+=g;
    y+=v; 
  }
}

function keyPressed() {
  if ((keyCode === UP_ARROW || keyCode == 32) && !isTouched) {
    gameMode = 1;
    v=-6;
    if(pipes.length==0){
      let pipeLength = random(20,height-80);
      pipes.push([width,pipeLength]);
      setInterval(()=>{
        let pipeLength = random(20,height-200);
        pipes.push([width,pipeLength]);
      },1500);
    }
  }
}

function displayPipes(){
  for(let i = 0;i<pipes.length;i++){
    fill(0,255,0);
    rect(pipes[i][0],0,50,pipes[i][1]); 
    rect(pipes[i][0],pipes[i][1]+100,50,height-pipes[i][1]-40); 
  }
}

function updatePipes(){
  for(let i = 0;i<pipes.length;i++){
    pipes[i][0]-=speed;
  }

  if(pipes.length>0 && pipes[0][0]<-50){
    pipes.shift();
  }
}

function checkGameOver(){
  if(y>height-radius/2){
    noLoop();
    return;
  }
  if(y<0){
    v = 0;
    speed = 0;
    isTouched = true;  
    return;  
  }

  for(let i = 0;i<pipes.length;i++){
    if((pipes[i][0] <= width/2-35+radius/2 && pipes[i][0] >= width/2-35-50) && (y<pipes[i][1]+radius/2 || y>pipes[i][1]+100-radius/2) && !isTouched){
      v = 0;
      speed = 0;
      isTouched = true;
      break;
    }
  }
  return;
}
