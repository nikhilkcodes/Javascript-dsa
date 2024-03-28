function findTrailingZeros(n) {
	if (n < 0) return -1;
	let count = 0;
	for (let i = 5; n / i >= 1; i *= 5) {
		count += Math.floor(n / i);
	}
	return count;
}

const n = 100;
console.log(`count of trailing 0s in ${n}! is ${findTrailingZeros(n)}`);


//For i = 5: 100 / 5 = 20, meaning there are 20 numbers in the range from 1 to 100 that are divisible by 5. These numbers contribute one trailing zero each when they are multiplied together to calculate 100!.
//For i = 25: 100 / 25 = 4, meaning there are 4 numbers in the range from 1 to 100 that are divisible by 25. These numbers each contribute an additional trailing zero when multiplied together.
// time complexity of this program is O(log5n)
