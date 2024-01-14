const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	const result = arr.reduce((sum, current) => sum + current, 0);
	return result;
};

const multiply = function (arr) {
	return arr.reduce((product, current) => product * current, 1);
};

const power = function (a, b) {
	return a ** b;
};

const factorial = function (num) {
	if (num === 0) {
		return 1;
	}
	return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
