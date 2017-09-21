var container = document.getElementsByClassName('container')[0];
var header = document.getElementById('title');
var text = "";
var symbol = "o";

for (var i = 0; i < 9; i++) {
  text += '<div class="box"></div>';
}
container.innerHTML = text;

var divs = document.getElementsByClassName('box');

for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', startGame)
}

function startGame() {
  if (symbol === 'x') {
    symbol = 'o';
  }else {
    symbol = 'x';
  }
  this.innerHTML = symbol;
  this.style.fontSize = '110px';
  this.style.color = "#ffde00";
  this.style.textAlign = "center";

var comb1 = [divs[0], divs[1], divs[2]];
var comb2 = [divs[3], divs[4], divs[5]];
var comb3 = [divs[6], divs[7], divs[8]];
var comb4 = [divs[0], divs[3], divs[6]];
var comb5 = [divs[1], divs[4], divs[7]];
var comb6 = [divs[2], divs[5], divs[8]];
var comb7 = [divs[0], divs[4], divs[8]];
var comb8 = [divs[2], divs[4], divs[6]];
var allCombs = [comb1, comb2, comb3, comb4, comb5, comb6, comb7, comb8];

  for (var i = 0; i < allCombs.length; i++) {
    if (allCombs[i][0].innerHTML === allCombs[i][1].innerHTML && allCombs[i][0].innerHTML === allCombs[i][2].innerHTML && allCombs[i][0].innerHTML !== '') {
      for (var j = 0; j < allCombs[i].length; j++) {
        allCombs[i][j].style.background = 'tomato';
      }
      if (symbol == 'x') {
        setTimeout(function () {
          header.innerHTML = 'Player X has won!';
        }, 100);
      }else {
        setTimeout(function () {
          header.innerHTML = 'Player O has won!';
        }, 100);
      }
      for (i = 0; i < divs.length; i++) {
        divs[i].removeEventListener('click', startGame);
        }
    }
  }
}
