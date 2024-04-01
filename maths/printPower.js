// given twin two integers x and n, write a function to compute X^n. we may assume that x
// and n are small and overflow doesn't happen

//javascript implementation of above code
// naive iterative function to calculate pow(x,n)

function power(x, n) {
	let pow = 1;
	for (let i = 0; i < n; i++) {
		pow = pow * n;
	}
	return pow;
}

let x = 2;
let n = 3;

let result = power(x, n);
console.log(result);
//time complexity O(n)


function power(x, y) {
	if (y === 0) return 1;
	let temp = power(x, Math.floor(y / 2));
	if (y % 2 === 0) return temp * temp;
	else return x * temp * temp;
}
let p = 2;
let q = 3;
console.log(power(p, q))
// time complexity: O(log n)

/**
 * When y is 0, the function returns 1, which is the base case.
For any other value of y, it calculates temp = power(x, Math.floor(y / 2)).
If y is even (i.e., y % 2 === 0), it returns temp * temp.
If y is odd (i.e., y % 2 === 1), it returns x * temp * temp.

Now, let's look at your example:
You are calling power(2, 3).
The recursive calls will be as follows:
power(2, 3) calls power(2, 1) (since Math.floor(3 / 2) = 1).
power(2, 1) calls power(2, 0) (since Math.floor(1 / 2) = 0).
power(2, 0) returns 1.
Then, power(2, 1) returns 2 * 1 * 1, which equals 2.
Finally, power(2, 3) returns 2 * 2 * 2, which equals 8.
So, the function correctly computes 2^3, which is 8.
*/
