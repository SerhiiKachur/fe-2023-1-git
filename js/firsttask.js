let userPrice = +prompt("Enter your price to see your discout (uah):");
if (userPrice >= 1500) {
  console.log(userPrice - userPrice * 0.1);
} else if (userPrice >= 500) {
  console.log(userPrice - userPrice * 0.05);
}