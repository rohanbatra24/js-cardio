const longestWord = (sen) => {
	const wordArr = sen.toLowerCase().match(/[a-z]+/g); // using reg exp to get rid of punctuation

	const sorted = wordArr.sort((a, b) => {
		return b.length - a.length;
	});

	const result = sorted.filter((word) => {
		return sorted[0].length === word.length;
	});

	if (result.length > 1) {
		return result;
	}
	else {
		return result[0];
	}
};

console.log(longestWord('hellooooooo, my name is rohannndddd'));
