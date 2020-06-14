const missingLetters = (str) => {
	const codesArr = [];

	for (let i = 0; i < str.length; i++) {
		codesArr.push(str.charCodeAt(i));
	}

	for (let i = codesArr[0]; i < codesArr[codesArr.length - 1]; i++) {
		if (!codesArr.includes(i)) {
			return String.fromCharCode(i);
		}
	}
};

console.log(missingLetters('abcdefghijklno'));
