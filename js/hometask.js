/**
 * @returns {number}
 * @param {number} number1
 * @param {number} number2
 */
const getBiggestNumber = function (number1, number2) {
  if (
    typeof number1 !== "number" ||
    typeof number2 !== "number" ||
    isNaN(number1 - number2)
  ) {
    return null;
  }
  if (number1 > number2) {
    return number1;
  }
  return number2;
};
getBiggestNumber();

const isNumberEven = function (num) {
  if (typeof num !== "number" || isNaN(num)) {
    return null;
  }
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
isNumberEven();
