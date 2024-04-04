//You are given two numbers a and b. You need to find the multiplication of a and b under modulo M (M as 10^9+7).
class Solution {
	multiplicationUnderModulo(a, b) {
		const modulo = BigInt(1000000007);
		const multiply = (BigInt(a) * BigInt(b)) % modulo;
		return multiply.toString();
	}
}
