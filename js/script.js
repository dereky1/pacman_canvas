var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//load images

var pacman = new Image();
var ghostB = new Image();

pacman.onload = function(){console.log("pacman loaded");
draw()};
ghostB.onload = function(){console.log("ghostB loaded");};

pacman.src = "images/pacman.png";
ghostB.src = "images/ghost.png";

//draw images
var x = 0;
var inc = 1;

function draw(){
  context.clearRect(0,0,canvas.width,canvas.height);

  context.drawImage(pacman, x, 150, 51, 51);
  context.drawImage(ghostB, x - 50, 150, 51, 51);

  if(inc > 0 && x >= canvas.width - 150)
    inc = -1;
  else if(inc < 0 && x <= 50)
    inc = 1;

  x += inc;

  requestAnimationFrame(draw);
}

draw();
