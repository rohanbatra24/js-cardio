function chunkArray(arr, len) {
	// const result = [];

	// for (let i = 0; i < arr.length; i = i + len) {
	// 	result.push(arr.slice(i, len + i));
	// }

	// return result;

	////////////////////////////

	const chunkedArr = [];

	arr.forEach((element) => {
		const last = chunkedArr[chunkedArr.length - 1];

		if (!last || last.length === len) {
			chunkedArr.push([ element ]);
		}
		else {
			last.push(element);
		}
	});

	return chunkedArr;
}

console.log(chunkArray([ 1, 2, 3, 4, 5, 6, 7, 8 ], 2));
