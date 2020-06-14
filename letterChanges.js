const letterChanges = (str) => {
	// change one letter to next one

	let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
		if (char === 'z' || char === 'Z') {
			return 'a';
		}
		else {
			return String.fromCharCode(char.charCodeAt() + 1);
		}
	});

	newStr = newStr.replace(/a|e|i|o|u/gi, (char) => {
		return char.toUpperCase();
	});

	return newStr;
};

console.log(letterChanges('Hello Therezzz'));
