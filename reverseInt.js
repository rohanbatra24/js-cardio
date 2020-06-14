const reverseInt = (int) => {
	// const isNegative = int < 1;
	// if (isNegative) {
	// 	int = int * -1;
	// }
	// let result = Number(int.toString().split('').reverse().join(''));
	// if (isNegative) {
	// 	result = result * -1;
	// }
	// return result;

	const revString = int.toString().split('').reverse().join('');

	return parseInt(revString) * Math.sign(int);
};

// console.log(parseInt('777-'));

console.log(reverseInt(-25122));
