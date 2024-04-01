class Solution {
	quadraticRoots(a, b, c) {
		let roots = new Array();
		let root1 = 0, root2 = 0;
		// value of b^2-4ac
		let temp = (Math.pow(b, 2) - 4 * a * c);

		if (temp < 0)
			roots.push(-1);
		else {

			root1 = Math.floor((-b + Math.sqrt(temp)) / (2 * a));
			root2 = Math.floor((-b - Math.sqrt(temp)) / (2 * a));

			roots.push(Math.max(root1, root2));
			roots.push(Math.min(root1, root2));
		}
		return roots;
	}
}
/**
 * The values of the roots depends on the term (b2 – 4ac) which is known as the discriminant (D).
If D > 0:
	   => This occurs when b2 > 4ac.
	   => The roots are real and unequal.
	   => The roots are {-b + √(b2 – 4ac)}/2a and {-b – √(b2 – 4ac)}/2a.
Else If D = 0:
	   => This occurs when b2 = 4ac.
	   => The roots are real and equal.
	   => The roots are (-b/2a).
Else if D < 0:
	   => This occurs when b2 < 4ac.
	   => The roots are imaginary and unequal.

Implementation
Declare empty vector 'roots' and two variables root1 and root2.
Initialize variable temp with value (b2 – 4ac), it is the value of discriminant (D).
If temp is less than 0, means roots are imaginary.
So push back -1 into 'roots' vector as asked in problem statement.
Else roots are real, so calculate root1 and root2 using Sridharacharya Formula, then take the floor value as asked in problem statement.
		   root1 is floor((-b + sqrt(temp)) / (2 * a));
		   root2 is floor((-b - sqrt(temp)) / (2 * a));
		   1. Push back max of root1 and root2 into roots vector.
		   2. Push back min of root1 and root2 into roots vector.
Return vector 'roots' as answer.
Let us understand it better with the help of an example:
Input: a = 1, b = -7, c = 12
So the equation if 1.x2 -7.x + 12 = 0
temp (discriminant) = (-7)2 - (4*1*12 ) = 1
root1 = 4 (which is floor(( 7+√1)/(2*1)) = 4)
root2 = 3 (which is floor(( 7-√1)/(2*1)) = 3).
roots = {4, 3}.
 */
