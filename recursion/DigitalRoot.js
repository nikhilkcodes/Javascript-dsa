class Solution {
    digitalRoot(n) {
        if (n === 0) {
            return 0; 
        } else if (n < 10 && n > -10) {
            return n;
        } else {
            const sum = (n % 10) + this.digitalRoot(Math.floor(n / 10)); 
            if (sum < 10) {
                return sum;
            } else {
                return this.digitalRoot(sum); 
            }
        }
    }
}