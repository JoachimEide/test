function Nim(player1, player2, victory, total, maxGrab) {
  this.player1 = player1;
  this.player2 = player2;
  this.victory = victory;
  this.total = total;
  this.maxGrab = maxGrab;

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
  if (player1 === undefined && player2 === undefined) {
    throw 'Minimum en av spillerne må være human!';
  }

  if (total === undefined) {
    this.total = 20;
  }

  if (total < 12) {
    throw '"total" må være større enn 12';
  }

  if (maxGrab === undefined) {
    this.maxGrab = 3;
  }
  
  if (maxGrab <= 1) {
    throw '"maxGrab" må være større enn 1';
  }


}

p = new Nim("Susanne", "Eline", undefined, undefined, undefined)

console.log(p);
