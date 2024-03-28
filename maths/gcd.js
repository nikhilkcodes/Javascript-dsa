// greatest common factor of two number is a largest number which divides both number
//recursive call 1: gcd(98, 56) calls gcd(42, 56)
//recursive call 2: gcd(42, 56) calls gcd(42, 14)
//recursive call 3: gcd(42, 14) calls gcd(28, 14)
//recursive call 4: gcd(28, 14) calls gcd(14, 14)
//recursive call 5: gcd(14, 14) returns 14
// time complexity O(min(a,b))

// 1st approach

//function gcd(a, b) {
//	if (a === 0) return b;
//	if (b === 0) return a;
//	if (a === b) return a;

//	if (a > b) return gcd(a - b, b);
//	return gcd(a, b - a);
//}

//const a = 98, b = 56;
//console.log(`GCD of ${a} and ${b} is ${gcd(a, b)}`);

// second approach
//when b is not equal to 0 it proceeds to the recursive call
// in first call gcd ( 56, 98 % 56 ) = gcd( a, b ) = gcd(56, 42) then 42 to comes at place of 56 because
// gcd (b, a % b ) and we mod b parameter in function
// next call ( 42, 56 % 42 ) = gcd( a, b ) =  gcd(42, 14)
// next call gcd(14, 42 % 14) = gcd( a, b ) = gcd(14, 0)
//time complexity of this program is O(log(min(a,b))
const gcd = (a, b) => {
	return b === 0 ? a : gcd(b, a % b);
};
const a = 98, b = 56;
console.log(`GCD of ${a} and ${b} is ${gcd(a, b)}`);
