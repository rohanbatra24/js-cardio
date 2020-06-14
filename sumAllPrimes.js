const isPrime = (num) => {
	for (let i = 2; i < num - 1; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};

const sumAllPrimes = (num) => {
	let counter = 0;
	for (let i = 2; i <= num; i++) {
		if (isPrime(i)) {
			counter += i;
		}
	}

	return counter;
};

console.log(sumAllPrimes(100));
