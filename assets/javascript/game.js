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
     * words are always lowercase here.
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
     * isEqualWord
     * 
     * there is a high probability that each trial wont be a match 
     * so greedly check for the first unmatched map
     */
    this.isEqualWord = function() {

        for ( var i = 0; i < w.choosenWord.length; i++)  {
            if (w.choosenWord[i] !== w.currentWord[i] ) {
                return false; 
            }
        }

        return true;

    },
    
    /**
     * fill currentWord with key :string
     * 
     * @param k : string
     * @return fill : number | number of blanks filled
     * 
     */
    this.fillCurrentWord= function(k) {

        var fill = 0;

        for ( var i = 0; i < w.choosenWord.length; i++)  {
            if (w.choosenWord[i] === k ) {
                w.currentWord[i] = w.choosenWord[i];
                fill++;
            }
        }
        
        return fill;
    },

    /**
     * get a random word for the game
     * max = (this.dict.length -1)
     * min = 0
     * 1 is necessary when using floor to get an equal distribution of values called.
     */
    this.setChoosenWord = function() {

        // reset atrributes
        this.choosenWord = [];
        this.currentWord = [];
        this.guessedLetters = [];
        this.totalGuesses = 0;

        // ramdom * ( max - min ) + min 
        this.choosenWord = this.dict[Math.floor(Math.random() * ( 1+ (this.dict.length -1) - 0  ) ) + 0 ].split("");

        // set the blanks
        for ( var i = 0; i < this.choosenWord.length; i++) {
            this.currentWord.push("_ ");
        }

        // set the total guesses for the word to be thrice the lenght of the choosenWord
        this.totalGuesses = this.choosenWord.length * 3;

    } // end of setChoosenWord

 }// end of WordGameObj

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
    document.querySelector(".remaining-guesses").innerHTML = w.totalGuesses;
    document.querySelector(".letters-guessed-static").innerHTML = w.guessedLettersStatic;

 }

function run(w) {
    w.setStatic();
    w.setChoosenWord();
    drawBoard(w);

    document.onkeyup = function(event) {

        // lower case it. 
        var k = event.key.toLowerCase();
        var fills = 0

        // reset the board after a win
        if ( w.isEqualWord() || w.totalGuesses <= 0 ) {

            w.setChoosenWord();
            //console.log(w.choosenWord.join(""));
            drawBoard(w);

        } else {      

            // make sure that only alphabets are used.
            if ( k.length === 1 && (k.charAt(0) >= "a" && k.charAt(0) <= "z" )) {

                if ( !w.isEqualWord()) {
                    fills = w.fillCurrentWord(k);
                }

                //console.log(k);            
                //console.log(w.isEqualWord());

                // remaining guesses
                w.totalGuesses--;

                // add the wins
                if ( w.isEqualWord() ) {
                    w.wins++;
                }

                drawBoard(w);

            }
        }
    }
}


  var w = new WordGameObj();
  run(w);

  //console.log(w.choosenWord.join(""));
