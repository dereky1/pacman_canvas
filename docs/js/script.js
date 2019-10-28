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
  [ 5, 0, 0, 0, 0, 0, 1, 0, 0, 0,-1, 0, 0, 0, 0, 0, 0,-1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 5],
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
var count;

//log when images are loaded
pacman.onload = function(){console.log("pacman loaded");};
pacmanclosed.onload = function(){console.log("pacmanclosed loaded");};
ghostB.onload = function(){console.log("ghostB loaded");};
ghostR.onload = function(){console.log("ghostR loaded");};
ghostP.onload = function(){console.log("ghostP loaded");};
ghostO.onload = function(){console.log("ghostO loaded");};
food.onload = function(){console.log("food loaded");};
power.onload = function(){console.log("power loaded");};
block.onload = function(){console.log("block loaded");};

//load image into their vars
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

//pacman (x,y)
var x = 13;
var y = 23

//pacman animation var
var anim = 0;
var moving = 0;

//pacman
var movex = 1;
var movey = 0;

//score
var score = 0;
var end = true;
var menu = true;

//direction
window.addEventListener('keydown', function(e){
  //console.log(map[y+movey][x+movex]);
  //up
  if(e.keyCode == '38' && map[y-1][x] != -1){
    movex = 0;
    movey = -1;
  }
  //down
  else if(e.keyCode == '40' && map[y+1][x] != -1){
    movex = 0;
    movey = 1;
  }
  //left
  else if(e.keyCode == '37' && map[y][x-1] != -1){
    movex = -1;
    movey = 0;
  }
  //right
  else if(e.keyCode == '39' && map[y][x+1] != -1){
    movex = 1;
    movey = 0;
  }

  if([32,37,38,39,40].indexOf(e.keyCode) > -1){
    e.preventDefault();
  }

}, false);

window.addEventListener('keyup', function(e){
  //console.log(map[y+movey][x+movex]);
  //up
  if(e.keyCode == '38' && map[y-1][x] != -1){
    movex = 0;
    movey = -1;
  }
  //down
  else if(e.keyCode == '40' && map[y+1][x] != -1){
    movex = 0;
    movey = 1;
  }
  //left
  else if(e.keyCode == '37' && map[y][x-1] != -1){
    movex = -1;
    movey = 0;
  }
  //right
  else if(e.keyCode == '39' && map[y][x+1] != -1){
    movex = 1;
    movey = 0;
  }
}, false);


///helper functions
function eat(map,x,y){
  if(map[x][y] == 1){
    map[x][y] = 0;
    count -= 1;
    score += 1;
  }
  else if(map[x][y] == 2){
    map[x][y] = 0;
  }
}

function drawBoard(map){
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
}

function resetBoard(){
  map = [
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
    [ 5, 0, 0, 0, 0, 0, 1, 0, 0, 0,-1, 0, 0, 0, 0, 0, 0,-1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 5],
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
  count = 240;

  //ghost (x,y)
  ghostBx = 11;
  ghostBy = 15;
  ghostRx = 11;
  ghostRy = 13;
  ghostPx = 16;
  ghostPy = 13;
  ghostOx = 16;
  ghostOy = 15;

  x = 13;
  y = 23

  anim = 0;
  moving = 0;

  movex = 1;
  movey = 0;
}

function resetScore(){
  score = 0;
}

//button onclicks
document.getElementById("playButton").onclick = function(){
  if(menu && end){
    menu = false;
    end = false;
    resetBoard();
    draw();
  }
}

document.getElementById("stopButton").onclick = endGame;

//end game function
function endGame(){
  if(!menu && !end){
    menu = true;
    end = true;
    context.clearRect(0,0,canvas.width,canvas.height);
    drawBoard(map);
    context.fillText("Score: "+score, 360,360);
    resetScore();
  }
}

function draw(){
    if(!menu){
      context.clearRect(0,0,canvas.width,canvas.height);
      //console.log(movex,movey);
      //draw board
      drawBoard(map);

      //movement
      if(map[y+movey][x+movex] == -1){
        movex = 0;
        movey = 0;
      }

      // warp portal
      if(map[y][x] == 5){
        if(x == 0){x = 26;}
        else{x = 1;}
      }

      //movement speed
      if(moving == 15){
        moving = -15;
        x += movex;
        y += movey;
      }

      //animation for pacman
      if(anim >= 0 && anim < 15){
        eat(map,y,x);
        context.drawImage(pacman, (x)*30, (y)*30, 30, 30);
      }
      else{
        context.drawImage(pacmanclosed, (x)*30, (y)*30, 30, 30);
        eat(map,y,x);
        if(anim > 0){
          anim = -15;}
        }


      //console.log(score);

      context.drawImage(ghostB, ghostBx*30, ghostBy*30, 30, 30);
      context.drawImage(ghostR, ghostRx*30, ghostRy*30, 30, 30);
      context.drawImage(ghostP, ghostPx*30, ghostPy*30, 30, 30);
      context.drawImage(ghostO, ghostOx*30, ghostOy*30, 30, 30);


      moving += 1;
      anim += 1;

      console.log(count);
      if(count <= 0)
        endGame();

      if(end) return;
      requestAnimationFrame(draw);
    }
    else{
      drawBoard(map);
      context.fillStyle = "white";
      context.font ="30px Arial";
      context.fillText("Pac Man", 380,310);
      context.fillText("Click to Play", 350,900);
    }

}

draw();
