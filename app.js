var player1 = 100;
var player2 = 100;
var wincount1 = 0;
var wincount2 = 0;
var gnum = 1;
function shoot2() {
  document.getElementById('btn1').disabled = true;
  document.getElementById('btn2').disabled = false;
  document.getElementById('reset').disabled = true;
  var shothp = Math.floor(Math.random() * 6);
  player2 = player2 - shothp;
  console.log(player2)

  if (player2 <= 0 || player2 == 0) {
    wincount1 = wincount1 + 1;
    document.getElementById("win").innerHTML = " Player One Won This Round";
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('reset').disabled = false;
    document.getElementById('winc1').innerHTML = "Player One's Wincount : " + wincount1;

  }
  else {
    document.getElementById("score1").innerHTML = "You Hit Player Two with " + shothp + " damage,<br/> Player Two's HP fell down to " + player2;
  }
}
function shoot1() {
  document.getElementById('btn2').disabled = true;
  document.getElementById('btn1').disabled = false;
  document.getElementById('reset').disabled = true;
  var shothp = Math.floor(Math.random() * 6);
  player1 = player1 - shothp;
  console.log(player1)

  if (player1 <= 0 || player1 == 0) {
    wincount2 = wincount2 + 1;
    document.getElementById("win").innerHTML = " Player Two Won This Round!";
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('reset').disabled = false;
    document.getElementById('winc2').innerHTML = "Player Two's Wincount : " + wincount2;

  }
  else {
    document.getElementById("score2").innerHTML = "You Hit Player One with " + shothp + " damage, <br /> Player One's HP fell down to " + player1;
  }
}

function reset() {
  if (wincount1 == 3) {
    document.getElementById("win").innerHTML = " Player One won the game !"
    document.getElementById('btn1').remove()
    document.getElementById('btn2').remove()
    document.getElementById('reset').remove()
    document.getElementById('score-display').remove()
  }
  else if (wincount2 >= 3) {
    document.getElementById("win").innerHTML = " Player One won the game !"
    document.getElementById('btn1').remove()
    document.getElementById('btn2').remove()
    document.getElementById('reset').remove()
    document.getElementById('score-display').remove()
  }
  else {
    gnum = gnum + 1;
    document.getElementById('btn1').disabled = false;
    document.getElementById('btn2').disabled = false;
    document.getElementById("score1").innerHTML = " ";
    document.getElementById("score2").innerHTML = " ";
    document.getElementById("win").innerHTML = " ";
    document.getElementById("wcount").innerHTML = "Game number " + gnum;
    player1 = 100;
    player2 = 100;
  }

}
