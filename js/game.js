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
  buttonAction(gameObject.total)
  return gameObject;
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

const checkTurn = (turn, player1Name, player2Name) => {
  let message = "";
  if (turn % 2 != 0) {
    message = `Det er ${player1Name} sin tur:`
    document.getElementById("message").innerHTML = message;
  } else {
    message = `Det er ${player2Name} sin tur:`
    document.getElementById("message").innerHTML = message;
  }
}

const buttonAction = total => {
  const listOfButtonID = ["p1-1","p2-1","p1-2","p2-2","p1-3","p2-3","p1-4","p2-4"];
  let grab = 1;
  for (let i = 0; i < listOfButtonID.length; i++) {
    if (i <= 1)
    document.getElementById(listOfButtonID[i]).addEventListener("click", function(){
      grab++;
      console.log('Du trykket på 1');
      return grab;
    })
    if (i <= 3)
    document.getElementById(listOfButtonID[i]).addEventListener("click", function(){
      grab++;
      return grab;
    })
    if (i <= 5)
    document.getElementById(listOfButtonID[i]).addEventListener("click", function(){
      grab++;
      return grab;
    })
    if (i <= 7)
    document.getElementById(listOfButtonID[i]).addEventListener("click", function(){
      grab++;
      return grab;
    })
  }
}
