//function to calculate the factorial of a given number
// 1st approach time complexity is O(n)
// in this approach we are using recursion , where the condition is if n = 0 or n = 1 it will return 1
// because when we add 0+1 the result is 1
// and after the condition n will decrease by 1 when , every time n decrease it will
// multiply by previous value of n
function factorial(n) {
	if (n === 0 || n === 1) return 1;
	return n * factorial(n - 1);
}

//const num = 5;
//console.log(`Factorial of ${num} is ${factorial(num)}`);

// 2nd approach iterative
function factorial(n) {
	let res = 1;
	for (let i = 2; i <= n; i++) {
		res = res * i
	}
	return res;

}

const number = 5;
console.log(`factorial of ${number} is ${factorial(number)}`)
// time complexity of this code is O(n)
// in this program the loop will start from 2 to n where i will increment by 1
// and in each iteration res which has initial value of 1 will multiply with the value of i
// then the res will become multiplication result , means if res has value 1 and i is 2 then 1*2 will become res
// next time the res will multiply increased value means 3
