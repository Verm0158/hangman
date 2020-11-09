window.addEventListener("load", init);

//Global variables
let word: string = "butterscup";
let lettersInWord: string[] = word.split("");
let guessedLettersInWord: string[] = [];
const lettersInDOM: HTMLDivElement = document.querySelector("#letters");
const attemptInDOM: HTMLDivElement = document.querySelector("#attempt");
let attempts: number = 5;

/**
 * Function to initialize the programme
 */
function init() {
  //write the alphabet keyboard to the DOM
  writeAlphabetToTheDom();
  guessedLettersLength();
}

/**
 * Function to write a dash for every letter in a word to the guessed letters
 */
function guessedLettersLength() {
  for (let i:number = 0; i < lettersInWord.length; i++) {
    guessedLettersInWord.push("-");
  }
  writeGuessedLettersToDOM(guessedLettersInWord);
}

/**
 * Function to write the guessed letters to the DOM
 * @param guessedLetters The guessed letters 
 */
function writeGuessedLettersToDOM(guessedLetters: string[]) {
  lettersInDOM.innerHTML = "";
  guessedLetters.forEach(function(letter) {
    const letterElement = document.createElement("li");
    letterElement.innerHTML = letter;
    lettersInDOM.append(letterElement);
  })
}

/**
 * Function to write the alphabet keyboard to the DOM
 */
function writeAlphabetToTheDom() {
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const keyboard: HTMLDivElement = document.querySelector("#keyboard");
  alphabet.forEach(function (element, index) {
    let divKey: HTMLDivElement = document.createElement("div");
    divKey.id = element;
    divKey.classList.add("key");
    divKey.innerHTML = element;
    keyboard.append(divKey);
  });
}
