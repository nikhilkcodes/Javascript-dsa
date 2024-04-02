//A prime number is a number which is only divisible by 1 and itself.
//Given number N check if it is prime or not.

class Solution {
	isPrime(N) {
		if (N <= 1) {
			return false;
		}
		for (let i = 2; i <= Math.sqrt(N); i++) {
			if (N % i === 0) {
				return false;
			}
		}
		return true;
	}
}

//time complexity = O(N^1/2)
