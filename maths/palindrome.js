// The program checks if a number is a palindrome or not.
// Initialize the reverse variable to 0 and temp variable to n.
// In each iteration, reverse gets updated by multiplying its current value by 10 and adding the last digit of temp.
// temp gets updated by removing its last digit in each iteration.
// For example, if we have the number 7007:
// In the first iteration: reverse = 0 * 10 + 7007 % 10 = 0 + 7 = 7,    temp = Math.floor(7007 / 10) = 700
// In the second iteration: reverse = 7 * 10 + 700 % 10 = 70 + 0 = 70,    temp = Math.floor(700 / 10) = 70
// In the third iteration: reverse = 70 * 10 + 70 % 10 = 700 + 0 = 700,    temp = Math.floor(70 / 10) = 7
// In the fourth iteration: reverse = 700 * 10 + 7 % 10 = 7000 + 7 = 7007,     temp = Math.floor(7 / 10) = 0
// After all iterations, reverse becomes 7007, which is the reverse of the original number.
// Finally, the function returns true if reverse equals n, indicating that the number is a palindrome.
// Otherwise, it returns false.
function checkPalindrome(n) {
	let reverse = 0;
	let temp = n;
	while (temp !== 0) {
		reverse = (reverse * 10) + (temp % 10);
		temp = Math.floor(temp / 10)
	}
	return reverse === n;
}

const n = 7007;
if (checkPalindrome(n)) {
	console.log("yes");
} else {
	console.log("No");
}

// time complexity: O(log(n)) or O(Number of digit in a given number)
