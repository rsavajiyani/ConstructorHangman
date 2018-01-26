var letters = {
	createLetter: function(letter, index) {
		this.letter = letter;
		this.index = index;
		this.guessed = false;
	}
}

module.exports = letters;