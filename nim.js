function Nim(player1, player2, victory, total, maxGrab) {
  this.player1 = player1;
  this.player2 = player2;
  this.victory = victory;
  this.total = total;
  this.maxGrab = maxGrab;

  if (player1 != undefined) {
    this.player1 = {
      name: player1;
    }
  }

  if (player2 != undefined) {
    this.player2 = {
      name: player2;
    }
  }

  if (total === undefined) {
    this.total = 20;
  }

  if (maxGrab === undefined) {
    this.maxGrab = 3;
  }


}
