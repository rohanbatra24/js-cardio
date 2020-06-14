const sortByHeight = (arr) => {
	let treesIndex = [];

	arr.forEach((element, i) => {
		if (element === -1) {
			treesIndex.push(i);
		}
	});

	const res = arr.sort((a, b) => {
		return a - b;
	});

	res.splice(0, treesIndex.length);

	treesIndex.forEach((element) => {
		res.splice(element, 0, -1);
	});

	return res;
};

console.log(sortByHeight([ -1, -1, 5, 7, 4, 5, -1, 4, 8 ]));
