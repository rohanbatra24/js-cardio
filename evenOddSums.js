const evenOddSums = (arr) => {
	let res = [ 0, 0 ];

	arr.forEach((num) => {
		if (num % 2 === 0) {
			res[0] += num;
		}
		else {
			res[1] += num;
		}
	});

	return res;
};

console.log(evenOddSums([ 50, 60, 60, 45, 71 ]));
