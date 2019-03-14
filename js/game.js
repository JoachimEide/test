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

const makeButton = maxGrab => {
  const listOfButtonID = ["p1-1","p2-1","p1-2","p2-2","p1-3","p2-3","p1-4","p2-4"]
  let counterOfButtonID = 0;
  for (let i = 0; i < maxGrab; i++) {
    document.getElementById(listOfButtonID[counterOfButtonID]).style.display="block";
    counterOfButtonID++;
    document.getElementById(listOfButtonID[counterOfButtonID]).style.display="block";
    counterOfButtonID++;
  }
}

const getUserData = () => {
  const userData = JSON.parse(sessionStorage.getItem("info"));
  console.log(userData);
  const gameObject = new Nim(userData[0], userData[1], function (){victory()}, userData[2], userData[3]);
  console.log(gameObject)
  makeButton(userData[3])
  return gameObject;
}

// Forsøk på oppførsel på knapper
const objOfGame = getUserData();
let turn = 1;

const button1 = () => {
  let total = objOfGame.total;
  while (total > 0) {
    if (turn % 2 != 0) {
      objOfGame.total--;
      console.log(`${objOfGame.player1.name}'s turn, the total is ${total}`)
      turn++;
      break;
    } else {
      objOfGame.total--;
      console.log(`${objOfGame.player2.name}'s turn, the total is ${total}`)
      turn++;
      break;
    }
  }
  if (total === 0 && turn % 2 === 0) {
    console.log(`${objOfGame.player1.name} is the WINNER! `)
  } else if (total === 0 && turn % 2 != 0) {
    console.log(`${objOfGame.player2.name} is the WINNER! `)
  }
}

const button2 = () => {
  let total = objOfGame.total;
  while (total > 0) {
    if (turn % 2 != 0) {
      objOfGame.total = objOfGame.total - 2;
      console.log(`${objOfGame.player1.name}'s turn, the total is ${total}`)
      turn++;
      break;
    } else {
      objOfGame.total-2;
      console.log(`${objOfGame.player2.name}'s turn, the total is ${total}`)
      turn++;
      break;
    }
  }
  if (total === 0 && turn % 2 === 0) {
    console.log(`${objOfGame.player1.name} is the WINNER! `)
  } else if (total === 0 && turn % 2 != 0) {
    console.log(`${objOfGame.player2.name} is the WINNER! `)
  }
}
