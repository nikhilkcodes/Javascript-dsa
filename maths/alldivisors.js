//find divisors of a number

// time complexity O(sqrt(n))

/*const printDivisors = (n) => {
	for (let i = 1; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			if (n / i === i) {
				console.log(i);
			} else {
				console.log(i, n / i);
			}
		}
	}
}

console.log(printDivisors(100));
*/
//naive solution
/**function printDivisors(n) {
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			console.log(i);
		}
	}
}

console.log("the divisors of 100 are:")
printDivisors(100) **/
// time complexity O(n)


/**
 * When i = 1, i * i = 1 * 1 = 1, and 1 < 50. The divisor is printed.
When i = 2, i * i = 2 * 2 = 4, and 4 < 50. The divisor is printed.
When i = 3, i * i = 3 * 3 = 9, and 9 < 50. The divisor is printed.
When i = 4, i * i = 4 * 4 = 16, and 16 < 50. The divisor is printed.
When i = 5, i * i = 5 * 5 = 25, and 25 < 50. The divisor is printed.
When i = 6, i * i = 6 * 6 = 36, and 36 < 50. The divisor is printed.
But when i = 7, i * i = 7 * 7 = 49, and 49 < 50, so the condition fails, and the loop stops.
 */

function printDivisors(n) {
	let i = 1;
	for (let i = 1; i * i < n; i++) {
		if (n % i == 0) {
			console.log(n / i);
		}
	}
}

const n = 50;
printDivisors(n)

// time complexity: O(sqrt(n))
