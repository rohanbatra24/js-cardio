const capitalizeLetters = (str) => {
	const arr = str.toLowerCase().split(' ');

	const ans = arr.map((word) => {
		return word.substring(0, 1).toUpperCase() + word.substring(1);
	});

	return ans.join(' ');

	//////////

	const arr = str.toLowerCase().split(' ');

	// for (let i = 0; i < arr.length; i++) {
	// 	arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1);
	// }

	return arr.join(' ');
};

console.log(capitalizeLetters('i love javaScrIpt'));
