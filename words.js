var wordBank = {
	wordList: ["Phoenix", "Tucson", "Chandler", "Gilbert", "Mesa", "Flagsgtaff", "Glendale", "Scottsdale"],
	createdWord: function(word) {
		for (i = 0; i<word.length; i++) {
			this[i] = word[i];
		}
	}

};


module.exports = wordBank;