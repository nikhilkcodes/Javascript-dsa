function isLucky(n) {
    // Define the helper function
    function isLuckyHelper(N, pos) {
        // Base case: if pos exceeds N, then N is a lucky number
        if (pos > N) {
            return true;
        }
        
        // If N is divisible by pos, it means N would be deleted in this step
        if (N % pos == 0) {
            return false;
        }
        
        // Calculate the new position of N after removing numbers before it
        let new_N = N - Math.floor(N / pos);
        
        // Recursive call with updated N and incremented pos
        return isLuckyHelper(new_N, pos + 1);
    }
    
    // Initial call to the helper function with pos starting at 2
    return isLuckyHelper(n, 2) ? 1 : 0;
}

console.log(isLucky(5));

/*
Step-by-step example with N = 19:
1. Initial call: isLuckyHelper(19, 2)
   - pos = 2, N = 19
   - 19 is not divisible by 2
   - new_N = 19 - Math.floor(19 / 2) = 19 - 9 = 10
   - Recursive call: isLuckyHelper(10, 3)

2. Recursive call: isLuckyHelper(10, 3)
   - pos = 3, N = 10
   - 10 is not divisible by 3
   - new_N = 10 - Math.floor(10 / 3) = 10 - 3 = 7
   - Recursive call: isLuckyHelper(7, 4)

3. Recursive call: isLuckyHelper(7, 4)
   - pos = 4, N = 7
   - 7 is not divisible by 4
   - new_N = 7 - Math.floor(7 / 4) = 7 - 1 = 6
   - Recursive call: isLuckyHelper(6, 5)

4. Recursive call: isLuckyHelper(6, 5)
   - pos = 5, N = 6
   - 6 is not divisible by 5
   - new_N = 6 - Math.floor(6 / 5) = 6 - 1 = 5
   - Recursive call: isLuckyHelper(5, 6)

5. Recursive call: isLuckyHelper(5, 6)
   - pos = 6, N = 5
   - 5 is not divisible by 6
   - new_N = 5 - Math.floor(5 / 6) = 5 - 0 = 5
   - Recursive call: isLuckyHelper(5, 7)

6. Recursive call: isLuckyHelper(5, 7)
   - pos = 7, N = 5
   - 5 is not divisible by 7
   - new_N = 5 - Math.floor(5 / 7) = 5 - 0 = 5
   - Recursive call: isLuckyHelper(5, 8)

7. Recursive call: isLuckyHelper(5, 8)
   - pos = 8, N = 5
   - 5 is not divisible by 8
   - new_N = 5 - Math.floor(5 / 8) = 5 - 0 = 5
   - Recursive call: isLuckyHelper(5, 9)

8. Continue this process until pos exceeds N
   - Since pos exceeds 19 without N being deleted, return true
*/