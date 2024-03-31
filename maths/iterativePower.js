// given an integer x and a positive number y, write a function that computes
// x^y under following condition
// a time complexity of the function should be O(log y)
// b extra space is O(1)
function power(x, y) {
	let res = 1;
	while (y > 0) {
		if (y & 1) {
			res = res * x;
		}
		y = y >> 1;
		console.log(`the value of y when right shift is: ${y}`);
		x = x * x;
	}
	return res;
}

const x = 3;
const y = 5;

console.log(power(x, y));
