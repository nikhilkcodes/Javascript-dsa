//You are given a number n. You need to find nth Fibonacci number.
//F(n)=F(n-1)+F(n-2); where F(1)=1 and F(2)=1
class Solution {
  
    fibonacci(n)
    {
        if(n<=0) {
            return 0;
        } else if (n==1) {
            return 1
        } else {
            return this.fibonacci(n-1) + this.fibonacci(n-2)
        }
    }
}