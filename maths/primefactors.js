function pfactor(n) {
	const isPrime = (n) => {
		if (n <= 1) return false;
		if (n === 2 || n === 3) return true;
		if (n % 2 === 0 || n % 3 === 0) return false;
		for (let i = 5; i < Math.sqrt(n); i = i + 6)
			if (n % i === 0 || n % (i + 2) === 0) return false;

		return true;

	}
	for (let i = 2; i < n; i++) {
		{
			if (isPrime(i)) {
				{
					let x = i;
					while (n % x === 0) {
						console.log(i)
						x = x * i
					}
				}
			}
		}
	}
}

console.log(pfactor(12))
