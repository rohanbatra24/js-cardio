const seekAndDestroy = (arr, ...args) => {
	return arr.filter((el) => !args.includes(el));
};

//////////////////////////

// function seekAndDestroy(arr) {
// 	const args = Array.from(arguments);

// 	function filterArr(arr) {
// 		return args.indexOf(arr) === -1;
// 	}

// 	return arr.filter(filterArr);
// }

console.log(seekAndDestroy([ 1, 2, 3, 4 ], 1, 2));
