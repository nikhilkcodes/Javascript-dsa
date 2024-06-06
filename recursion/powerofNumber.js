class Solution {
    power(N, R) {
        // Convert R to a BigInt to handle very large values
        R = BigInt(R);

        // Define the modulus value as a BigInt
        const mod = 1000000007n;

        // Initialize ans to 1 as a BigInt
        let ans = 1n;

        // Initialize pow to N as a BigInt
        let pow = BigInt(N);

        // Loop while R is greater than 0
        while (R > 0n) {
            // If R is odd, multiply ans by pow and take modulo
            if (R % 2n === 1n) {
                ans = (ans * pow) % mod;
            }
            // Square the pow and take modulo
            pow = (pow * pow) % mod;
            // Divide R by 2 (integer division)
            R = R / 2n;
        }

        // Return the result as a string
        return ans.toString();
    }
}
