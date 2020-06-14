const flattenArray = (arr) => {
	// let result = [];

	// for (let el of arr) {
	// 	if (Array.isArray(el)) {
	// 		for (let x of el) {
	// 			result.push(x);
	// 		}
	// 	}
	// 	else {
	// 		result.push(el);
	// 	}
	// }

	// return result;

	//////////////////////

	// return arr.reduce((a, b) => {
	// 	return a.concat(b);
	// });

	/////////

	return [].concat(...arr);
};

console.log(flattenArray([ [ 3, 4, 5 ], 1, 2, [ 3 ] ]));
