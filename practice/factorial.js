//Given a positive integer N. The task is to find factorial of N.
class Solution {
	factorial(N) {
		if (N === 0 || N === 1) {
			return 1
		}
		return N * this.factorial(N - 1);
	}
}
