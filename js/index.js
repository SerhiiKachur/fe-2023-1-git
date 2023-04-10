// Завдання на if..else

// let userPrice = +prompt("Enter your price to see your discout (uah):");
// if (userPrice >= 1500) {
//   console.log(userPrice - userPrice * 0.1);
// } else if (userPrice >= 500) {
//   console.log(userPrice - userPrice * 0.05);
// }

let pencilPrice = 5;
let paperPrice = 100;
let rulerPrice = 25;

let totalPencilPrice = function () {
  let userPencilCount = +prompt("Скільки олівців бажаєте купити (1шт - 5грн):");
  let pencilPrice = 5;
  switch (userPencilCount) {
    case 1: {
      console.log(pencilPrice);
      break;
    }
    case 2: {
      console.log(pencilPrice * 2);
      break;
    }
    case 3: {
      console.log(pencilPrice * 3);
      break;
    }
    case 4: {
      console.log(pencilPrice * 4);
      break;
    }
    case 5: {
      console.log(pencilPrice * 5);
      break;
    }
    default: {
      console.log("Лише 5 одиниць в наявності");
    }
  }
  return pencilPrice;
};
let totalPaperPrice = function () {
  let userPaperCount = +prompt(
    "Скільки папіру бажаєте купити (1уп(100аркушів) - 100грн):"
  );
  let paperPrice = 100;
  switch (userPaperCount) {
    case 1: {
      console.log(paperPrice);
      break;
    }
    case 2: {
      console.log(paperPrice * 2);
      break;
    }
    case 3: {
      console.log(paperPrice * 3);
      break;
    }
    case 4: {
      console.log(paperPrice * 4);
      break;
    }
    case 5: {
      console.log(paperPrice * 5);
      break;
    }
    default: {
      console.log("Лише 5 одиниць в наявності");
    }
  }
  return paperPrice;
};

let totalRulerPrice = function () {
  let userRulerCount = +prompt("Скільки лінійок бажаєте купити (1шт - 25грн):");
  let rulerPrice = 25;
  switch (userRulerCount) {
    case 1: {
      console.log(rulerPrice);
      break;
    }
    case 2: {
      console.log(rulerPrice * 2);
      break;
    }
    case 3: {
      console.log(rulerPrice * 3);
      break;
    }
    case 4: {
      console.log(rulerPrice * 4);
      break;
    }
    case 5: {
      console.log(rulerPrice * 5);
      break;
    }
    default: {
      console.log("Лише 5 одиниць в наявності");
    }
  }
  return rulerPrice;
};


totalPencilPrice();
totalPaperPrice();
totalRulerPrice();

console.log ((pencilPrice*userPencilCount)+(paperPrice*userPaperCount)+(rulerPrice*userRulerCount));
