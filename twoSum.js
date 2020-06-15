const twoSum = (arr, S) => {
	// let map = {};
	// let res = [];

	// arr.forEach((num) => {
	// 	map[num] = S - num;
	// });

	// for (let key in map) {
	// 	console.log('key', key);
	// 	console.log('mapkey', map[map[key]]);
	// 	if (key == map[map[key]]) {
	// 		res.push([ key, map[key] ]);
	// 	}
	// }

	// return res;

	///////////////////////////////////

	let map = {};
	let sumPairs = [];

	arr.forEach((num) => {
		let sumMinusNum = S - num;

		if (map[sumMinusNum.toString()]) {
			sumPairs.push([ num, sumMinusNum ]);
		}

		map[num.toString()] = sumMinusNum;
	});

	return sumPairs;
};

console.log(twoSum([ 3, 5, 2, -4, 8, 11 ], 7));
