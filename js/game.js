
const getInfo = id => {
  var info = document.getElementById(id).value

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
  let amount = parseInt(getInfo("amount"));
  let maxgrab = parseInt(getInfo("maxgrab"));
  const listOfAll = [spiller1, check1, spiller2, check2, amount, maxgrab];
  console.log(listOfAll);
  return listOfAll;
}
