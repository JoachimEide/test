const getPlayer1 = () => {
  let player1 = document.getElementById(navn1);
  return player1;
}

const getPlayer2 = () => {
  let player2 = document.getElementById(navn2);
  return player2;
}

const humanOrMachine1 = () => {
  let check1 = document.getElementById(check1);
  return check1;
}

const humanOrMachine2 = () => {
  let check2 = document.getElementById(check2);
  return check2;
}

const game = Nim(player1, player2, undefined, undefined, undefined);
