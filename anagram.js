const anagram = (str1, str2) => {
	// const charMap1 = {};
	// const charMap2 = {};

	// for (let char1 of str1) {
	// 	if (charMap1[char1]) {
	// 		charMap1[char1]++;
	// 	}
	// 	else charMap1[char1] = 1;
	// }

	// for (let char2 of str2) {
	// 	if (charMap2[char2]) {
	// 		charMap2[char2]++;
	// 	}
	// 	else charMap2[char2] = 1;
	// }

	// for (let char in charMap1) {
	// 	if (charMap1[char] !== charMap2[char]) {
	// 		return false;
	// 	}
	// }

	// return true;

	////////////////////////////////

	const helper = (str) => {
		return str.toLowerCase().replace(/[^a-z0-9+]+/g, '').split('').sort().join('');
	};

	return helper(str1) === helper(str2);
};

console.log(anagram('belowsss(&$', 'elbsowss'));
