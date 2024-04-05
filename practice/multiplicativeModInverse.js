
/**
 *  // To find the multiplicative modulo inverse of 'a' modulo 'm', we're looking for a number 'x' such that:
// (a * x) % m = 1
 * which (a * x) % m = 1 because that's the definition of the multiplicative modulo inverse.
 */
class Solution {
	modInverse(a, m) {
		a = a % m; // Ensure a is in the range [0, m)
		for (let x = 1; x < m; x++) {
			if ((a * x) % m == 1) // Check if (a*x) % m == 1
				return x; // Return x if condition satisfies
		}
		return -1; // Return -1 if no multiplicative inverse is found
	}
}
