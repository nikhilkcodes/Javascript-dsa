//find divisors of a number

// time complexity O(n)

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
function printDivisors(n) {
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			console.log(i);
		}
	}
}

console.log("the divisors of 100 are:")
printDivisors(100)
// time complexity O(n)


