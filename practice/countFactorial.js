//Given an integer N. Find the number of digits that appear in its factorial.
//Factorial is defined as, factorial(n) = 1*2*3*4……..*N and factorial(0) = 1.
class Solution {
	digitsInFactorial(N) {
		if (N < 0)
			return 0;
		let count = 0;
		for (let i = 2; i <= N; i++) {
			count += Math.log10(i);
		}
		return Math.floor(count) + 1;
	}
}

/**
 * Calculate the logarithm (base 10) of each number from 2 to 5:

Math.log10(2) ≈ 0.301
Math.log10(3) ≈ 0.477
Math.log10(4) ≈ 0.602
Math.log10(5) ≈ 0.699
Sum up the logarithms:
0.301 + 0.477 + 0.602 + 0.699 ≈ 2.079

Take the floor value of the sum:
floor(2.079) ≈ 2

Add 1 to get the number of digits:
2 + 1 = 3

So, the factorial of 5 has 3 digits.
 */
