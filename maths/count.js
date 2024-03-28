// program to count the digit of numbers here in the program the value of count increases and the
// value of n decreases because of mod by 10 , the value of count depends on the value of n
// the total itration is equal to the last value of count and the total digits of number is value of count
// the time complexity O(log10(n)) or theta num digits

function countDigit(n) {
	if (n === 0) return 1;
	let count = 0;
	while (n !== 0) {
		n = Math.floor(n / 10);
		console.log(`the value of n before count is : ${n}`);
		count++;
		console.log(`the value of count is : ${count}`);
	}
	return count
}

const n = 526536266737;
console.log(`Number of Digits: ${countDigit(n)}`);
