const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((res, num) => res * num, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let product = 1;
  for (let i = num; i >= 2; i--) product *= i;
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
