//program to find prime number
// naive approach
//in this approach first it will check the number is less then equal to 1 then
// it will return false
// then check 2 to square root of n, suppose we are taking 25 as n
// then it will go for less then or equal to sqrt of 5 means, then i will mod the number
// first it will mod 25 % 3 which is 1 not equal to 0 then it is prime number , because we will receive reminder
// till 5 when 25 % 5 is 0 then the loop will stop, because it has 3 factors so it will return false
function isPrime(n) {
	if (n <= 1) return false;
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}
	return true;
}

console.log(isPrime(5))
// time complexity of this program is O(sqrt(n))

//efficient approach
//Start with n = 25.
//Check if n is less than or equal to 1. It's not, so we proceed.
//Check if n is equal to 2 or 3. It's not, so we proceed.
//Check if n is divisible by 2 or 3. Since 25 % 2 != 0 and 25 % 3 != 0, we proceed.
//Start the loop with i = 5.
//Check if i is less than the square root of n. Since sqrt(25) = 5, and i = 5 which is equal to 5, the condition is not met. So, the loop doesn't execute.
//The function returns false because 25 is divisible by 5.
//So, when n = 25, the function returns false, indicating that 25 is not a prime number.

const isPrime = (n) => {
	if (n <= 1) return false;
	if (n === 2 || n === 3) return true;
	if (n % 2 === 0 || n % 3 === 0) return false;
	for (let i = 5; i < Math.sqrt(n); i = i + 6)
		if (n % i === 0 || n % (i + 2) === 0) return false;

	return true;

}

//time complexity is O(sqrt(n))
