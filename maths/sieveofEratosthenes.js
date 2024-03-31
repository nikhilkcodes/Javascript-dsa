// JavaScript program to print all primes smaller than or equal to
// n using Sieve of Eratosthenes
function SieveofEratosthenes(n) {
	let prime = [];
	for (let i = 0; i <= n; i++) {
		prime[i] = true;
	}
	for (let p = 2; p * p <= n; p++) {
		if (prime[p] === true) {
			for (let i = p * p; i <= n; i += p) {
				prime[i] = false;
			}
		}
	}
	let result = [];
	for (let p = 2; p <= n; p++) {
		if (prime[p]) {
			result.push(p);
		}
	}
	return result;
}

//time complexity - O(n*log(log(n)))
