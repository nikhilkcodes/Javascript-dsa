//You are given a number n. You need to find the count of digits in n.
class Solution {
    countDigits(n)
    {
        if (n == 0) {
            return 1;
        } else if (n < 10 && n > -10) {
            return 1;
        } else {
            return 1 + this.countDigits(Math.floor(n / 10));
        }
    }
}