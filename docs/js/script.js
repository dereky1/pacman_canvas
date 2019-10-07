var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//load images

var pacman = new Image();
var ghostB = new Image();
var ghostR = new Image();
var ghostP = new Image();
var ghostO = new Image();
var pacmanclosed = new Image();
var food = new Image();
var power = new Image();
var block = new Image();

//map
var map = [
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,-1,-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,-1],
  [-1, 1,-1,-1,-1,-1, 1,-1,-1,-1,-1,-1, 1,-1,-1, 1,-1,-1,-1,-1,-1, 1,-1,-1,-1,-1, 1,-1],
  [-1, 2,-1,-1,-1,-1, 1,-1,-1,-1,-1,-1, 1,-1,-1, 1,-1,-1,-1,-1,-1, 1,-1,-1,-1,-1, 2,-1],
  [-1, 1,-1,-1,-1,-1, 1,-1,-1,-1,-1,-1, 1,-1,-1, 1,-1,-1,-1,-1,-1, 1,-1,-1,-1,-1, 1,-1],
    //5
  [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,-1],
  [-1, 1,-1,-1,-1,-1, 1,-1,-1, 1,-1,-1,-1,-1,-1,-1,-1,-1, 1,-1,-1, 1,-1,-1,-1,-1, 1,-1],
  [-1, 1,-1,-1,-1,-1, 1,-1,-1, 1,-1,-1,-1,-1,-1,-1,-1,-1, 1,-1,-1, 1,-1,-1,-1,-1, 1,-1],
  [-1, 1, 1, 1, 1, 1, 1,-1,-1, 1, 1, 1, 1,-1,-1, 1, 1, 1, 1,-1,-1, 1, 1, 1, 1, 1, 1,-1],
  [-1,-1,-1,-1,-1,-1, 1,-1,-1,-1,-1,-1, 0,-1,-1, 0,-1,-1,-1,-1,-1, 1,-1,-1,-1,-1,-1,-1],
    //10
  [-1,-1,-1,-1,-1,-1, 1,-1,-1,-1,-1,-1, 0,-1,-1, 0,-1,-1,-1,-1,-1, 1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1, 1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,-1, 1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1, 1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1, 1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1, 1,-1,-1, 0,-1, 0, 0, 0, 0, 0, 0,-1, 0,-1,-1, 1,-1,-1,-1,-1,-1,-1],
  [ 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,-1, 0, 0, 0, 0, 0, 0,-1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    //15
  [-1,-1,-1,-1,-1,-1, 1,-1,-1, 0,-1, 0, 0, 0, 0, 0, 0,-1, 0,-1,-1, 1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1, 1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1, 1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1, 1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,-1, 1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1, 1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1, 1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1, 1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1, 1,-1,-1,-1,-1,-1,-1],
    //20
  [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,-1,-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,-1],
  [-1, 1,-1,-1,-1,-1, 1,-1,-1,-1,-1,-1, 1,-1,-1, 1,-1,-1,-1,-1,-1, 1,-1,-1,-1,-1, 1,-1],
  [-1, 1,-1,-1,-1,-1, 1,-1,-1,-1,-1,-1, 1,-1,-1, 1,-1,-1,-1,-1,-1, 1,-1,-1,-1,-1, 1,-1],
  [-1, 2, 1, 1,-1,-1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,-1,-1, 1, 1, 2,-1],
  [-1,-1,-1, 1,-1,-1, 1,-1,-1, 1,-1,-1,-1,-1,-1,-1,-1,-1, 1,-1,-1, 1,-1,-1, 1,-1,-1,-1],
    //25
  [-1,-1,-1, 1,-1,-1, 1,-1,-1, 1,-1,-1,-1,-1,-1,-1,-1,-1, 1,-1,-1, 1,-1,-1, 1,-1,-1,-1],
  [-1, 1, 1, 1, 1, 1, 1,-1,-1, 1, 1, 1, 1,-1,-1, 1, 1, 1, 1,-1,-1, 1, 1, 1, 1, 1, 1,-1],
  [-1, 1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 1,-1,-1, 1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 1,-1],
  [-1, 1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 1,-1,-1, 1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 1,-1],
  [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,-1],
    //30
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
];

pacman.onload = function(){console.log("pacman loaded");};
pacmanclosed.onload = function(){console.log("pacmanclosed loaded");};
ghostB.onload = function(){console.log("ghostB loaded");};
ghostR.onload = function(){console.log("ghostR loaded");};
ghostP.onload = function(){console.log("ghostP loaded");};
ghostO.onload = function(){console.log("ghostO loaded");};
food.onload = function(){console.log("food loaded");};
power.onload = function(){console.log("power loaded");};
block.onload = function(){console.log("block loaded");};

pacman.src = "images/pacman.png";
pacmanclosed.src = "images/pacmanclosed.png";
ghostB.src = "images/ghost.png";
ghostR.src = "images/ghostR.png";
ghostP.src = "images/ghostP.png";
ghostO.src = "images/ghostO.png";
food.src = "images/pacmanclosed.png";
power.src = "images/power.png";
block.src = "images/block.png"

//draw images
//ghost (x,y)
var ghostBx = 11;
var ghostBy = 15;
var ghostRx = 11;
var ghostRy = 13;
var ghostPx = 16;
var ghostPy = 13;
var ghostOx = 16;
var ghostOy = 15;

var x = 13;
var y = 23
var inc = 1;
var anim = 0;

function draw(){
  context.clearRect(0,0,canvas.width,canvas.height);

  //draw board
  var i;
  for (i = 0; i < 28; i++){
    var j;
    for (j = 0; j < 31; j++){
      if(map[j][i] == 1){
        context.drawImage(food, i*30+12, j*30+12, 6, 6);
      }
      else if(map[j][i] == 2){
        context.drawImage(power, i*30+9, j*30+9, 15, 15);
      }
      else if(map[j][i] == -1){
        context.drawImage(block, i*30, j*30, 30, 30);
      }
    }
  }

  //animation for pacman
  if(anim >= 0 && anim < 15){context.drawImage(pacman, x*30, y*30, 30, 30);}
  else{
    context.drawImage(pacmanclosed, x*30, y*30, 30, 30);
    if(anim > 0){
      anim = -15;}
    }

  context.drawImage(ghostB, ghostBx*30, ghostBy*30, 30, 30);
  context.drawImage(ghostR, ghostRx*30, ghostRy*30, 30, 30);
  context.drawImage(ghostP, ghostPx*30, ghostPy*30, 30, 30);
  context.drawImage(ghostO, ghostOx*30, ghostOy*30, 30, 30);

  if(inc > 0 && x >= canvas.width - 150)
    inc = -1;
  else if(inc < 0 && x <= 50)
    inc = 1;

  //x += inc;
  anim += 1;
  //console.log(anim);

  requestAnimationFrame(draw);
}

draw();
