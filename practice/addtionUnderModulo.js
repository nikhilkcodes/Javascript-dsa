//Given two numbers a and b, find the sum of a and b. Since the sum can be very large, find the sum modulo 10^9+7.

class Solution {
	sumUnderModulo(a, b) {
		const modulo = BigInt(1000000007); // 10^9 + 7
		const sum = (BigInt(a) + BigInt(b)) % modulo;
		return sum.toString();
	}
}

//Expected Time Complexity : O(1)
