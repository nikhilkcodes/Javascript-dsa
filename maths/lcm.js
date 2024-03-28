function gcd(a, b) {
	if (b === 0) return a;
	return gcd(b, a % b);
}
console.log(`gcd ${gcd(15, 20)}`);
function lcm(a, b) {
	return (a / gcd(a, b)) * b;
}

// Driver program to test above function
const a = 15;
const b = 20;
console.log(`LCM of ${a} and ${b} is ${lcm(a, b)}`);


//first the program will check if b = 0 then return a, then calculate gcd(15, 15%20)
//which is 15 then it will calculate gcd(a,b) = (20, 15 % 20 = 20) then (15, 20 % 15 = 5) then ( 5, 15 % 5 = 0)
// then 5 which is gcd of a,b later on we divide a / gcd(a, b)) * b by putting values 15 / 5 * 20 = 60.
// lcm of 15 and 20 is 60
// time complexity of this program is O(log(min(a,b)))
