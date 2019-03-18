// Dette kjører vi på index.html
const getInfo = id => {
  let info = document.getElementById(id).value
  if (info == "") {
    info = undefined
  }
  return info;
}

const humanOrMachine = check => {
  let result = document.getElementById(check).checked;
  return result;
}

const allInfo = () => {
  let spiller1 = getInfo("player1");
  let spiller2 = getInfo("player2");
  let check1 = humanOrMachine("check1");
  let check2 = humanOrMachine("check2");
  let obj1 = {name: spiller1, human: check1};
  let obj2 = {name: spiller2, human: check2};
  let amount = parseInt(getInfo("amount"));
  let maxgrab = parseInt(getInfo("maxgrab"));
  const listOfAll = [obj1, obj2, amount, maxgrab];
  console.log(listOfAll);
  sessionStorage.setItem("info", JSON.stringify(listOfAll));
  let gameHref = document.getElementById("start").onclick;
  location.href = "game.html";
  };

// Dette kjører vi på game.html

const getUserData = () => {
  const userData = JSON.parse(sessionStorage.getItem("info"));
  const gameObject = new Nim(userData[0], userData[1], function (){victory()}, userData[2], userData[3]);
  makeGame(gameObject)
  let turnCount = 1;
  buttonAction(gameObject, turnCount);
  }


const makeGame = gameObject => {
  document.getElementById("total").innerHTML = gameObject.total;
  const listOfButtonID = ["p1-1","p2-1","p1-2","p2-2","p1-3","p2-3","p1-4","p2-4"]
  let counterOfButtonID = 0;
  for (let i = 0; i < gameObject.maxGrab; i++) {
    document.getElementById(listOfButtonID[counterOfButtonID]).style.display="block";
    counterOfButtonID++;
    document.getElementById(listOfButtonID[counterOfButtonID]).style.display="block";
    counterOfButtonID++;
  }
}

const checkTurn = (gameObject, turn) => {
  let message = "";

  if (turn === 1 && gameObject.player2.human === true) {
    message = `Det er ${gameObject.player1.name} sin tur:`;
    document.getElementById("message").innerHTML = message;

  } else if (turn === 1 && gameObject.player2.human === false) {
    message = `Det er ${gameObject.player1.name} sin tur:`;
    function myFunction() {
      setTimeout(function(){document.getElementById("message").innerHTML = message;
      document.getElementById("total").innerHTML = gameObject.total;}, 2000);
    }
    myFunction()

  } else if (turn === 2 && gameObject.player2.human === true) {
    message = `Det er ${gameObject.player2.name} sin tur:`;
    document.getElementById("message").innerHTML = message;

  } else if (turn === 2 && gameObject.player2.human === false) {
    message = `Det er ${gameObject.player2.name} sin tur:`;
    document.getElementById("message").innerHTML = message;
    document.getElementById("total").innerHTML = gameObject.total;
  }
}

const checkButton = (gameObject, listOfButtonID) => {
  if (gameObject.total < 4 && gameObject.maxGrab === 4) {
    document.getElementById(listOfButtonID[7]).style.display="none";
    document.getElementById(listOfButtonID[6]).style.display="none";
    gameObject.maxGrab = 3;
  }
  if (gameObject.total < 3 && gameObject.maxGrab === 3) {
    document.getElementById(listOfButtonID[7]).style.display="none";
    document.getElementById(listOfButtonID[6]).style.display="none";
    document.getElementById(listOfButtonID[5]).style.display="none";
    document.getElementById(listOfButtonID[4]).style.display="none";
    gameObject.maxGrab = 2;
  }
  if (gameObject.total < 2 && gameObject.maxGrab ===2) {
    document.getElementById(listOfButtonID[7]).style.display="none";
    document.getElementById(listOfButtonID[6]).style.display="none";
    document.getElementById(listOfButtonID[5]).style.display="none";
    document.getElementById(listOfButtonID[4]).style.display="none";
    document.getElementById(listOfButtonID[3]).style.display="none";
    document.getElementById(listOfButtonID[2]).style.display="none";
    gameObject.maxGrab = 1;
  }
  return gameObject.maxGrab;
}

const aiRobot2 = (gameObject, turn) => {
  let randomGrab = Math.floor(Math.random() * gameObject.maxGrab) + 1;
  if (gameObject.total === 4 && gameObject.maxGrab > 3) {
    randomGrab = 4;
  } else if (gameObject.total === 3 && gameObject.maxGrab > 2){
    randomGrab = 3;
  } else if (gameObject.total === 2){
    randomGrab = 2;
  } else if (gameObject.total === 1){
    randomGrab = 1;
  }
  gameObject.total -= randomGrab;
  turn = 1;
  console.log(`Her grabber computeren ${randomGrab}`);
  buttonAction(gameObject, turn);
}

const buttonAction = (gameObject, turn) => {
  console.log(`Det er spiller ${turn} sin tur`);
  const listOfButtonID = ["p1-1","p2-1","p1-2","p2-2","p1-3","p2-3","p1-4","p2-4"];
  console.log(gameObject);
if (gameObject.total === 0 && turn === 2) {
  document.getElementById("game").style.display="none";
  document.getElementById("endgame").style.display="block";
  victory(gameObject.player1);
}
if (gameObject.total === 0 && turn === 1) {
  document.getElementById("game").style.display="none";
  document.getElementById("endgame").style.display="block";
  victory(gameObject.player2);
}

if (turn === 2 && gameObject.player2.human === false) {
  aiRobot2(gameObject, turn);
 }
checkTurn(gameObject, turn);
checkButton(gameObject, listOfButtonID);

if (turn === 1 && gameObject.player2.human === false) {
  document.getElementById(listOfButtonID[0]).addEventListener("click", function(){
    gameObject.total -= 1;
    turn = 2;
    buttonAction(gameObject, turn);
  },{once: true})
  document.getElementById(listOfButtonID[2]).addEventListener("click", function(){
    gameObject.total -= 2;
    turn = 2;
    buttonAction(gameObject, turn);
  },{once: true})
  document.getElementById(listOfButtonID[4]).addEventListener("click", function(){
    gameObject.total -= 3;
    turn = 2;
    buttonAction(gameObject, turn);
  },{once: true})
  document.getElementById(listOfButtonID[6]).addEventListener("click", function(){
    gameObject.total -= 4;
    turn = 2;
    buttonAction(gameObject, turn);
  },{once: true})

  } else if (turn === 2 && gameObject.player2.human === true) {
    document.getElementById(listOfButtonID[1]).addEventListener("click", function(){
      gameObject.total -= 1;
      turn = 1;
      document.getElementById("total").innerHTML = gameObject.total;
      buttonAction(gameObject, turn);
    },{once: true})
    document.getElementById(listOfButtonID[3]).addEventListener("click", function(){
      gameObject.total -= 2;
      turn = 1;
      document.getElementById("total").innerHTML = gameObject.total;
      buttonAction(gameObject, turn);
    },{once: true})
    document.getElementById(listOfButtonID[5]).addEventListener("click", function(){
      gameObject.total -= 3;
      turn = 1;
      document.getElementById("total").innerHTML = gameObject.total;
      buttonAction(gameObject, turn);
    },{once: true})
    document.getElementById(listOfButtonID[7]).addEventListener("click", function(){
      gameObject.total -= 4;
      turn = 1;
      document.getElementById("total").innerHTML = gameObject.total;
      buttonAction(gameObject, turn);
    },{once: true})

  } else if (turn === 1 && gameObject.player2.human === true) {
    document.getElementById(listOfButtonID[0]).addEventListener("click", function(){
      gameObject.total -= 1;
      turn = 2;
      document.getElementById("total").innerHTML = gameObject.total;
      buttonAction(gameObject, turn);
    },{once: true})
    document.getElementById(listOfButtonID[2]).addEventListener("click", function(){
      gameObject.total -= 2;
      turn = 2;
      document.getElementById("total").innerHTML = gameObject.total;
      buttonAction(gameObject, turn);
    },{once: true})
    document.getElementById(listOfButtonID[4]).addEventListener("click", function(){
      gameObject.total -= 3;
      turn = 2;
      document.getElementById("total").innerHTML = gameObject.total;
      buttonAction(gameObject, turn);
    },{once: true})
    document.getElementById(listOfButtonID[6]).addEventListener("click", function(){
      gameObject.total -= 4;
      turn = 2;
      document.getElementById("total").innerHTML = gameObject.total;
      buttonAction(gameObject, turn);
    },{once: true})
  }
}
