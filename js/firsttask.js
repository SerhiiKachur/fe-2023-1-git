let userPrice = +prompt("Enter your price to see your discout (uah):");
if (userPrice > 1500) {
  alert('Ви заплатите ' + (userPrice - userPrice * 0.1) + ' грн');
} else if (userPrice > 500) {
  alert('Ви заплатите ' + (userPrice - userPrice * 0.05) + ' грн');
} else if (userPrice <= 500) {
  alert('Ви заплатите ' + userPrice + ' грн');
} else if (userPrice < 0) {
  alert('Операція неможлива!')
}
