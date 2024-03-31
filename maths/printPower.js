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


/*
Initial Call: power(2, 3)
Since y is not 0, it proceeds to calculate temp = power(2, 1) because Math.floor(3/2) = 1.
First Recursive Call: power(2, 1)
Again, y is not 0, so it proceeds to calculate temp = power(2, 0) because Math.floor(1/2) = 0.
Second Recursive Call: power(2, 0)
Since y is now 0, it returns 1.
Back to the First Recursive Call: temp = 1
Since y % 2 is 1 (odd), it returns 2 * temp * temp, which is 2 * 1 * 1 = 2.
Back to the Initial Call: temp = 2
Since y % 2 is 1 (odd), it returns 2 * temp * temp, which is 2 * 2 * 2 = 8.
So, for p = 2 and q = 3, the output of the function power(2, 3) will be 8.
*/


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
