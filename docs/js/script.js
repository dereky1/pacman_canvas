var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//load images

var pacman = new Image();
var ghostB = new Image();
var ghostR = new Image();
var ghostP = new Image();
var ghostO = new Image();
var ghostScared = new Image();
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
ghostScared.onload = function(){console.log("scaredGhost loaded");};
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
ghostScared.src = "images/scaredGhost.png";
food.src = "images/pacmanclosed.png";
power.src = "images/power.png";
block.src = "images/block.png"

//draw images
//ghost (x,y)
var ghostBx;
var ghostBy;
var ghostRx;
var ghostRy;
var ghostPx;
var ghostPy;
var ghostOx;
var ghostOy;

//////  0 = blue
/////   1 = red
////    2 = pink
///     3 = orange
var ghostOut = [1,1,1,1];
var ghostDirections = [0,0,0,0];
var cooldown = [500,400,300,200];

//pacman (x,y)
var x;
var y;

//pacman animation var
var anim;
var moving;
var antimoving;
var scared = 0;

//pacman
var movex;
var movey;

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
    scared = 1000;
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
  antimoving = 0;

  movex = 1;
  movey = 0;

  ghostOut = [1,1,1,1];
  cooldown = [500,400,300,200];

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

//ghost movement functions
function findDirections(x,y){
  return [map[y][x-1],map[y][x+1],map[y-1][x],map[y+1][x]];
}

function randMove(directions){
  var possibleMoves = [];
  for(var i = 0; i < 4; i++){
    if(directions[i] != -1)
      possibleMoves.push(i);
  }
  //console.log(possibleMoves);
  return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
}

function ghostMove(color, direction){
  var tempX = 0;
  var tempY = 0;

  switch (direction) {
    case 2: //up
      tempY = -1;
      break;
    case 0: //left
      tempX = -1;
      break;
    case 3: //down
      tempY = 1;
      break;
    case 1: //right
      tempX = 1;
      break;
  }

  if(color == "b"){
    if(map[ghostBy + tempY][ghostBx + tempX] != -1){
      ghostBx += tempX;
      ghostBy += tempY;
    }
  }
  else if(color == "r"){
    if(map[ghostRy + tempY][ghostRx + tempX] != -1){
      ghostRx += tempX;
      ghostRy += tempY;
    }
  }
  else if(color == "o"){
    if(map[ghostOy + tempY][ghostOx + tempX] != -1){
      ghostOx += tempX;
      ghostOy += tempY;
    }
  }
  else if(color == "p"){
    if(map[ghostPy + tempY][ghostPx + tempX] != -1){
      ghostPx += tempX;
      ghostPy += tempY;
    }
  }
}

function ghostEnter(color){
  if(color == 0){
    ghostBx = 13;
    ghostBy = 11;
  }
  else if(color == 1){
    ghostRx = 13;
    ghostRy = 11;
  }
  else if(color == 3){
    ghostOx = 14;
    ghostOy = 11;
  }
  else if(color == 2){
    ghostPx = 14;
    ghostPy = 11;
  }
}

function draw(){
    if(!menu){
      context.clearRect(0,0,canvas.width,canvas.height);
      //console.log(movex,movey);
      //draw board
      drawBoard(map);

      //ghost cooldowns
      for(var i = 0; i < 4; i++){
        if(cooldown[i] > 0)
          cooldown[i] = cooldown[i] - 1;
        if(cooldown[i] == 0){
          cooldown[i] = cooldown[i] - 1;
          ghostEnter(i);
          ghostOut[i] = 0;
        }
      }

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

      //movement speed and ghost movement
      if(moving == 15){
        moving = -15;

        x += movex;
        y += movey;

        //detect player ghost collision
        if(scared <= 0 && ((x == ghostOx && y == ghostOy) || (x == ghostBx && y == ghostBy) || (x == ghostRx && y == ghostRy) || (x == ghostPx && y == ghostPy)))
          endGame();
      }

      //detect eat ghost
      if(scared > 0){
        if(ghostRx == x && ghostRy == y){
          ghostRx = 13;
          ghostRy = 14;
          cooldown[1] = 500;
          //ghostOut[1] = 1;
          score += 50;
        }
        if(ghostBx == x && ghostBy == y){
          ghostBx = 13;
          ghostBy = 14;
          cooldown[0] = 500;
          //ghostOut[0] = 1;
          score += 50;
        }
        if(ghostPx == x && ghostPy == y){
          ghostPx = 13;
          ghostPy = 14;
          cooldown[2] = 500;
          //ghostOut[2] = 1;
          score += 50;
        }
        if(ghostOx == x && ghostOy == y){
          ghostOx = 13;
          ghostOy = 14;
          cooldown[3] = 500;
          //ghostOut[3] = 1;
          score += 50;
        }
      }

      if(antimoving == 15){
        antimoving = -15;
        //ghost movement
        if(ghostOut[1] == 0)
          ghostMove("r", randMove(findDirections(ghostRx, ghostRy)));

        if(ghostOut[0] == 0)
          ghostMove("b", randMove(findDirections(ghostBx, ghostBy)));

        if(ghostOut[3] == 0)
          ghostMove("o", randMove(findDirections(ghostOx, ghostOy)));

        if(ghostOut[2] == 0)
          ghostMove("p", randMove(findDirections(ghostPx, ghostPy)));
      }

      //animation for pacman
      if(anim >= 0 && anim < 15){
        eat(map,y,x);
        context.drawImage(pacman, (x)*30, (y)*30, 30, 30);
        //console.log(score);
        if(scared > 0){
          context.drawImage(ghostScared, ghostBx*30, ghostBy*30, 30, 30);
          context.drawImage(ghostScared, ghostRx*30, ghostRy*30, 30, 30);
          context.drawImage(ghostScared, ghostPx*30, ghostPy*30, 30, 30);
          context.drawImage(ghostScared, ghostOx*30, ghostOy*30, 30, 30);
          scared = scared - 1;
        }
        else{
          context.drawImage(ghostB, ghostBx*30, ghostBy*30, 30, 30);
          context.drawImage(ghostR, ghostRx*30, ghostRy*30, 30, 30);
          context.drawImage(ghostP, ghostPx*30, ghostPy*30, 30, 30);
          context.drawImage(ghostO, ghostOx*30, ghostOy*30, 30, 30);
        }
      }
      else{
        context.drawImage(pacmanclosed, (x)*30, (y)*30, 30, 30);
        eat(map,y,x);
        if(anim > 0){
          anim = -15;}
          //console.log(score);
          if(scared > 0){
            context.drawImage(ghostScared, ghostBx*30, ghostBy*30, 30, 30);
            context.drawImage(ghostScared, ghostRx*30, ghostRy*30, 30, 30);
            context.drawImage(ghostScared, ghostPx*30, ghostPy*30, 30, 30);
            context.drawImage(ghostScared, ghostOx*30, ghostOy*30, 30, 30);
            scared = scared - 1;
          }
          else{
            context.drawImage(ghostB, ghostBx*30, ghostBy*30, 30, 30);
            context.drawImage(ghostR, ghostRx*30, ghostRy*30, 30, 30);
            context.drawImage(ghostP, ghostPx*30, ghostPy*30, 30, 30);
            context.drawImage(ghostO, ghostOx*30, ghostOy*30, 30, 30);
          }
        }


      moving += 1;
      antimoving += 1;
      anim += 1;


      if(scared <= 0 && ((x == ghostOx && y == ghostOy) || (x == ghostBx && y == ghostBy) || (x == ghostRx && y == ghostRy) || (x == ghostPx && y == ghostPy)))
        endGame();

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
