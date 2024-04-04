//Given a positive integer value N. The task is to find how many numbers less than or equal to N have numbers of divisors exactly equal to 3.

class Solution {
	exactly3Divisors(N) {
		let count = 0;

		// Start iterating from 2 up to the square root of N
		for (let i = 2; i * i <= N; i++) {
			// Assume i is prime
			let isPrime = true;

			// Check for divisibility of i with numbers from 2 up to the square root of i
			for (let j = 2; j * j <= i; j++) {
				// If i is divisible by j without remainder, it's not prime
				if (i % j === 0) {
					isPrime = false; // Set isPrime to false
					break; // Exit the loop since i is not prime
				}
			}

			// If i is prime and its square is less than or equal to N
			if (isPrime && i * i <= N) {
				count++; // Increment count
			}
		}

		// Return the count of numbers with exactly 3 divisors
		return count;
	}
}


//You don't need to read input or print anything. Your task is to complete the function exactly3Divisors() that takes N as input parameter and returns count of numbers less than or equal to N with exactly 3 divisors.



//Expected Time Complexity : O(N1/2 * N1/4)
//Expected Auxilliary Space :  O(1)
