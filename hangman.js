const inquire = require('inquirer');
const wordsImport = require('./words.js');
const lettersImport = require('./letters.js');

var currentWord;
var activeWord;
var guessesLeft;
var targetWord;
var count;

var game =  function() {
    inquirer.prompt([{
            type: "input",
            name: "userGuess",
            message: "Guess a letter!",
        }])
        .then(function(input) {
            var matches = [];
            for (var i = 0; i < currentWord.length; i++) {
                if (answers.letterGuess === activeWord[i]) {
					indexesWithMatches.push(parseInt(i));
                }
            }
            if (matches[0] == null) {
                console.log("INCORRECT!");
                guessesLeft--;
                if (guessesLeft == 0) {
                    console.log("Game Over! You've run out of guesses!");
                } 
			 else {
                    console.log(guessesLeft + "guesses remaining!!!");
                    game();
                }

            } else {
                console.log("CORRECT!!!");
				for (var l = 0; l < indexesWithMatches.length; l++) {
					word[indexesWithMatches[l]].guessed = true;
					}
                count = 0;
                for (j = 0; j < word.length; j++) {
                    if (word[m]['guessed'] == false) {
                        count++;
                    }
                }
                if (count == 0) {
                    console.log(currentWord)
                    console.log("You got it right! Next word!");
                    game();
                } 
                game();
            }

        });

}



var generateWord = function() {
	word = [];
	guessesLeft = 10;
    var spliceAt = Math.floor(Math.random() * wordsImport.wordList.length);
    currentWord = wordsImport.wordBank.wordList[spliceAt];
    activeWord = wordsImport.wordBank.createdWord(currentWord);
    var index = 0;
    for (var i in activeWord) {
        for (var j = i.length-1; j>-1; j--) {
            if (i[j] == "#") {
                index = parseInt(i.slice(j+1, ));
            }
        }
        var nextLetter = new lettersImport.createLetter(currentWord[index], index);
        targetWord.push(nextLetter);
    }
	

}

generateWord();

var displayWord = function(word) {
    var displayedWord = [];
    for (i = 0; i < word.length; i++) {
        if (targetWord[i].guessed == true) {
            displayedWord.push(word[i]);
        }
        else if (currentWord[i] == ' ') {
            displayedWord.push(" ");
            targetWord[i].gussed == true;
        }
        else {
            displayedWord.push("_");
        }
    }

    displayedWord = displayedWord.join().replace(/,/g,"");
    return displayedWord;
}

