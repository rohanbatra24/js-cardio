function addAll() {
	// return arguments.reduce((a, b) => {
	// 	return a + b;
	// });

	////////////////////

	let counter = 0;

	for (let key in arguments) {
		counter += arguments[key];
	}

	return counter;
}

console.log(addAll(2, 3));
