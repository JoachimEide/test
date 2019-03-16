function Nim(player1, player2, victory, total, maxGrab) {
  this.player1 = player1;
  this.player2 = player2;
  this.victory = victory;
  this.total = total;
  this.maxGrab = maxGrab;

  //Player 1 og Player 2
  if (this.player1.name === undefined) {
    throw 'Player1 mangler name egenskapen.';
  }

  if (this.player1.human === false && this.player2.human === false) {
    throw 'Minimum en av spillerne må være human!';
  }

  if (this.player2.name === undefined) {
    this.player2.name = 'Player2'
  }

//Total
  if (total === undefined) {
    this.total = 20;
  }

  if (total < 12) {
    throw 'Total antall klinkekuler må være større enn 12';
  }

  if (total > 30) {
    throw 'Total antall klinkekuler må være lavere enn 30';
  }

//MaxGrab
  if (maxGrab === undefined) {
    this.maxGrab = 3;
  }

  if (maxGrab <= 1) {
    throw 'maxGrab må være større enn 1';
  }

  if (maxGrab > 4) {
    throw 'maxGrab må være 4 eller mindre.'
  }

}


function victory(vinner){
  document.getElementById("winnerMessage").innerHTML = ("Vinneren er: "+vinner);
  return vinner

}

/* function victory(vinner){
  var winner = vinner.name;
  alert("The winner is: "+winner);
  return winner
} */
