function Nim(player1, player2, victory, total, maxGrab) {
  this.player1 = player1;
  this.player2 = player2;
  this.victory = victory;
  this.total = total;
  this.maxGrab = maxGrab;

//Player 1
  if (player1 != undefined) {
    this.player1 = {
      name: player1,
      human: true
    }
  }

  if (player1 === undefined) {
    this.player = {
      name: player1,
      human: false
    }
  }

//Player 2
  if (player2 != undefined) {
    this.player2 = {
      name: player2,
      human: true
    }
  }

  if (player2 === undefined) {
    this.player = {
      name: player2,
      human: false
    }
  }

  //Player 1 og Player 2
  if (player1.name === undefined || player2.name === undefined) {
    throw 'En eller begge spillerne mangler name egenskapen.';
  }

  if (player1.human === undefined || player2.human === undefined) {
    throw 'En eller begge spillerne mangler human egenskapen.'
  }

  if (player1.human === false && player2.human === false) {
    throw 'Minimum en av spillerne må være human!';
  }

//Total
  if (total === undefined) {
    this.total = 20;
  }

  if (total < 12) {
    throw '"total" må være større enn 12';
  }

  if (total > 30) {
    throw '"total" må være lavere enn 30';
  }

//MaxGrab
  if (maxGrab === undefined) {
    this.maxGrab = 3;
  }

  if (maxGrab <= 1) {
    throw '"maxGrab" må være større enn 1';
  }

  if (maxGrab > 5) {
    throw '"maxGrab" må være 5 eller mindre.'
  }

}

var spill = new Nim("Susanne", "Eline", undefined, 20, 4)

console.log(spill.player1.name);
