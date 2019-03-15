// Dette kjører vi på index.html
const getInfo = id => {
  let info = document.getElementById(id).value
  if (info == "") {
    info = undefined
  }
  return info
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
  console.log(userData);
  const gameObject = new Nim(userData[0], userData[1], function (){victory()}, userData[2], userData[3]);
  console.log(gameObject)
  makeGame(userData[3], userData[2])
  let turnCount = 1;
  buttonAction(gameObject.total, turnCount, gameObject.player1.name, gameObject.player2.name, gameObject.player2.human, gameObject.maxGrab);
  return console.log(gameObject);
  }


const makeGame = (maxGrab, totalCounter) => {
  document.getElementById("total").innerHTML = totalCounter;
  const listOfButtonID = ["p1-1","p2-1","p1-2","p2-2","p1-3","p2-3","p1-4","p2-4"]
  let counterOfButtonID = 0;
  for (let i = 0; i < maxGrab; i++) {
    document.getElementById(listOfButtonID[counterOfButtonID]).style.display="block";
    counterOfButtonID++;
    document.getElementById(listOfButtonID[counterOfButtonID]).style.display="block";
    counterOfButtonID++;
  }
}

const checkTurn = (total, turn, p1, p2, p2Human) => {
  let message = "";
  if (turn % 2 != 0 && p2Human === true) {
    message = `Det er ${p1} sin tur:`;
    document.getElementById("message").innerHTML = message;
  } else if (turn % 2 === 0 && p2Human === false) {
    message = `Det er ${p2} sin tur:`;
    function myFunction() {
      setTimeout(function(){document.getElementById("message").innerHTML = message;
      document.getElementById("total").innerHTML = total;}, 3000);
    }
    myFunction()
  } else if (turn % 2 === 0 && p2Human === true) {
    message = `Det er ${p2} sin tur:`;
    document.getElementById("message").innerHTML = message;
  } else if (turn % 2 === 0 && p2Human === false) {
    message = `Det er ${p2} sin tur:`;
    document.getElementById("message").innerHTML = message;
  }
}

const checkButton = (total, maxGrab, listOfButtonID) => {
  if (total < 4 && maxGrab === 4) {
    document.getElementById(listOfButtonID[7]).style.display="none";
    document.getElementById(listOfButtonID[6]).style.display="none";
    maxGrab = 3;
  }
  if (total < 3 && maxGrab === 3) {
    document.getElementById(listOfButtonID[7]).style.display="none";
    document.getElementById(listOfButtonID[6]).style.display="none";
    document.getElementById(listOfButtonID[5]).style.display="none";
    document.getElementById(listOfButtonID[4]).style.display="none";
    maxGrab = 2;
  }
  if (total < 2 && maxGrab ===2) {
    document.getElementById(listOfButtonID[7]).style.display="none";
    document.getElementById(listOfButtonID[6]).style.display="none";
    document.getElementById(listOfButtonID[5]).style.display="none";
    document.getElementById(listOfButtonID[4]).style.display="none";
    document.getElementById(listOfButtonID[3]).style.display="none";
    document.getElementById(listOfButtonID[2]).style.display="none";
    maxGrab = 1;
  }
  return maxGrab;
}

const aiRobot2 = (total, turn, p1, p2, p2Human, maxGrab) => {
  let randomGrab = Math.floor(Math.random() * maxGrab) + 1;
  if (total === 4 && maxGrab > 3) {
    randomGrab = 4;
  } else if (total === 3 && maxGrab > 2){
    randomGrab = 3;
  } else if (total === 2){
    randomGrab = 2;
  } else if (total === 1){
    randomGrab = 1;
  }
  total -= randomGrab;
  turn--;
  console.log(randomGrab);
  buttonAction(total, turn, p1, p2, p2Human, maxGrab);
}

const buttonAction = (total, turn, p1, p2, p2Human, maxGrab) => {
  const listOfButtonID = ["p1-1","p2-1","p1-2","p2-2","p1-3","p2-3","p1-4","p2-4"];
  checkTurn(total, turn, p1, p2, p2Human);
  checkButton(total, maxGrab, listOfButtonID)
  if (turn % 2 != 0) {
      document.getElementById(listOfButtonID[0]).addEventListener("click", function(){
      total -= 1;
      turn++;
      document.getElementById("total").innerHTML = total;
      buttonAction(total, turn, p1, p2, p2Human, maxGrab);
    },{once: true})
      document.getElementById(listOfButtonID[2]).addEventListener("click", function(){
      total -= 2;
      turn++;
      document.getElementById("total").innerHTML = total;
      buttonAction(total, turn, p1, p2, p2Human, maxGrab);
    },{once: true})
    document.getElementById(listOfButtonID[4]).addEventListener("click", function(){
      total -= 3;
      turn++;
      document.getElementById("total").innerHTML = total;
      buttonAction(total, turn, p1, p2, p2Human, maxGrab);
    },{once: true})
    document.getElementById(listOfButtonID[6]).addEventListener("click", function(){
      total -= 4;
      turn++;
      document.getElementById("total").innerHTML = total;
      buttonAction(total, turn, p1, p2, p2Human, maxGrab);
    },{once: true})
  } else if (turn % 2 === 0 && p2Human === true ) {
    document.getElementById(listOfButtonID[1]).addEventListener("click", function(){
      total -= 1;
      turn--;
      document.getElementById("total").innerHTML = total;
      buttonAction(total, turn, p1, p2, p2Human, maxGrab);
    },{once: true})
    document.getElementById(listOfButtonID[3]).addEventListener("click", function(){
      total -= 2;
      turn--;
      document.getElementById("total").innerHTML = total;
      buttonAction(total, turn, p1, p2, p2Human, maxGrab);
    },{once: true})
    document.getElementById(listOfButtonID[5]).addEventListener("click", function(){
      total -= 3;
      turn--;
      document.getElementById("total").innerHTML = total;
      buttonAction(total, turn, p1, p2, p2Human, maxGrab);
    },{once: true})
    document.getElementById(listOfButtonID[7]).addEventListener("click", function(){
      total -= 4;
      turn--;
      document.getElementById("total").innerHTML = total;
      buttonAction(total, turn, p1, p2, p2Human, maxGrab);
    },{once: true})
  } else if (turn % 2 === 0 && p2Human === false ){
      aiRobot2(total, turn, p1, p2, p2Human, maxGrab);
  }
  }
