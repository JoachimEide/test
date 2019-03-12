const getPlayer1 = () => {
  let player1 = document.getElementById("player1").value;
  console.log(`Player 1 med navn ${player1} er opprettet!`);
  return player1;
}

const getPlayer2 = () => {
  let player2 = document.getElementById("navn2").value;
    console.log(`Player 2 med navn ${player2} er opprettet!`);
    return player2;
}

const humanOrMachine1 = () => {
  let check1 = document.getElementById("check1").checked;
  return check1;
}

const humanOrMachine2 = () => {
  let check2 = document.getElementById("check2").checked;
  return check2;
}

const player1 = getPlayer1();
