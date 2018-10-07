/**
 * Word guessing Game
 */


 /**
  * main game object that contains 
  * 
  * . the list of possible words
  * . the number of words guessed
  * . remaining words guessed
  * 
  */
 function WordGameObj() {

    /**
     * data structure
     * 
     * list of possible words
     */
    this.dict = [
        "madonna",
        "terminator",
        "genesis"
    ],
    this.static = null,
    this.winsStatic = null,
    this.wins = 0,
    this.choosenWordStatic = null,    
    this.choosenWord = [],
    this.currentWordStatic = null,    
    this.currentWord = [],
    this.guessedLettersStatic = null,        
    this.guessedLetters = [],
    this.totalGuessesStatic = null,            
    this.totalGuesses = 0,

    /**
     * set statics
     */
    this.setStatic = function() {
        this.static = "Press any Key to Continue..";
        this.winsStatic = "Wins";
        this.currentWordStatic = "Current Word";        
        this.totalGuessesStatic = "Number of Guesses Remaining";
        this.guessedLettersStatic = "Letters already guessed";
    },

    /**
     * get a random word for the game
     * max = (this.dict.length -1)
     * min = 0
     * 1 is necessary when using floor to get an equal distribution of values called.
     */
    this.setChoosenWord = function() {

        // ramdom * ( max - min ) + min 
        this.choosenWord = this.dict[Math.floor(Math.random() * ( 1+ (this.dict.length -1) - 0  ) ) + 0 ].split("");

        // set the blanks
        for ( var i = 0; i < this.choosenWord.length; i++) {
            this.currentWord.push("_ ");
        }
    }
 }

 /**
  * @param Pass the word object w
  * @action draw the board
  */
 function drawBoard(w) {
    document.querySelector(".static").innerHTML = w.static;
    document.querySelector(".wins-static").innerHTML = w.winsStatic;
    document.querySelector(".wins").innerHTML = w.wins;
    document.querySelector(".current-word-static").innerHTML = w.currentWordStatic;
    document.querySelector(".current-word").innerHTML = w.currentWord.join("");
    document.querySelector(".remaining-guesses-static").innerHTML = w.totalGuessesStatic;
    document.querySelector(".letters-guessed-static").innerHTML = w.guessedLettersStatic;

 }

function run(w) {
    w.setStatic();
    w.setChoosenWord();
    drawBoard(w);
}


  var w = new WordGameObj();
  run(w);

  console.log(w.choosenWord.join(""));

  
