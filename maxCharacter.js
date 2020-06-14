const maxCharacter = (str) => {
	const map = {};

	str.split('').forEach((char) => {
		if (map[char]) {
			map[char]++;
		}
		else {
			map[char] = 1;
		}
	});

	const max = [ 0, '' ];

	for (let char in map) {
		if (map[char] > max[0]) {
			max[0] = map[char];
			max[1] = char;
		}
	}

	return max[1];
};

console.log(maxCharacter('javascript'));
