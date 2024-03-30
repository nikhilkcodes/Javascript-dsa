//first it will check the number it is prime or not
// then it will start a loop from 2 to entered number n if i is prime it will check
// n mode x is equal to 0 or not then it will print i and x will be mulplied by current i
/*function pfactor(n) {
	const isPrime = (n) => {
		if (n <= 1) return false;
		if (n === 2 || n === 3) return true;
		if (n % 2 === 0 || n % 3 === 0) return false;
		for (let i = 5; i < Math.sqrt(n); i = i + 6)
			if (n % i === 0 || n % (i + 2) === 0) return false;

		return true;

	}
	for (let i = 2; i < n; i++) {
		{
			if (isPrime(i)) {
				{
					let x = i;
					while (n % x === 0) {
						console.log(i)
						x = x * i
					}
				}
			}
		}
	}
}
console.log(pfactor(12))
*/
// second approach
/*function pfactor(n) {
	if (n <= 1) return;
	for (let i = 2; i * i <= n; i++) {
		while (n % i === 0) {
			console.log(i);
			n = n / i;
		}
	}
	if (n > 1)
		console.log(n);
}

console.log(pfactor(15)); */

/*
let's consider an example with n = 36 to see the step-by-step output:
Step 1: n is even, so it divides by 2. Output: 2. New n becomes 18.
Step 2: n is divisible by 2 again. Output: 2. New n becomes 9.
Step 3: n is divisible by 3. Output: 3. New n becomes 3.
Step 4: The for loop doesn't execute as i * i > n since i = 5 and 5 * 5 > 3.
Thus, the prime factors of 36 are printed as 2, 2, 3.
*/
function printprimefactors(n) {
	if (n <= 1) {
		return;
	}
	while (n % 2 === 0) {
		console.log(2)
		n = n / 2
	}
	while (n % 3 === 0) {
		console.log(3);
		n = n / 3;
	}
	for (let i = 5; i * i <= n; i = i + 6) {
		while (n % i === 0) {
			console.log(i)
		}
		while (n % (i + 2) === 0) {
			console.log(i + 2);
			n = n(i + 2);
		}
	}
	if (n > 3) {
		console.log((n));
	}
}
