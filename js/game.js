
const getInfo => (id) {
  var info = document.getElementById(id).value

  if (info == "") {
    info = undefined
  }
  return info
}

const humanOrMachine = (check) => {
  let check = document.getElementById(check).checked;
  return check1;
}


const allInfo = () => {
  const spiller1 = getInfo("player1");
  const spiller2 = getInfo("player2");
  const check1 = humanOrMachine("check1");
  const check2 = humanOrMachine("check2");
  const listOfAll = [spiller1, check1, spiller2, check2];
  return listOfAll;
}
