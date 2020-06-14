const reverseString = (str) => {
	return str.split('').reverse().join('');
};

const reverseString = (str) => {
	const result = [];

	for (let i = str.length - 1; i >= 0; i--) {
		result.push(str[i]);
	}

	return result.join('');
};

const reverseString = (str) => {
	let revString = '';

	for (let i = str.length - 1; i >= 0; i--) {
		revString += str[i];
	}

	return revString;
};

const reverseString = (str) => {
	let revString = '';

	for (let i = 0; i <= str.length - 1; i++) {
		revString = str[i] + revString;
	}

	return revString;
};

const reverseString = (str) => {
	let result = '';

	for (let letter of str) {
		result = letter + result;
	}

	return result;
};

const reverseString = (str) => {
	let revString = '';

	str.split('').forEach((char) => (revString = char + revString));

	return revString;
};

const reverseString = (str) => {
	return str.split('').reduce((revString, char) => {
		return char + revString;
	}, '');
};

console.log(reverseString('hello'));
