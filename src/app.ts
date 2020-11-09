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
  keyboard.addEventListener("click", guessLetter);
  alphabet.forEach(function (element, index) {
    let divKey: HTMLDivElement = document.createElement("div");
    divKey.id = element;
    divKey.classList.add("key");
    divKey.innerHTML = element;
    keyboard.append(divKey);
  });
}

/**
 * Function to find the clicked letter
 * @param event Event 
 */
function guessLetter(event: Event) {
  const target: HTMLElement = event.target as HTMLElement;
  if(target.id !== "keyboard") {
    const clickedLetter = target.id;
    const indexes: number[] = findLetter(clickedLetter);
    if(indexes.length > 0) {
      updateGuessedLettersOfWord(clickedLetter, indexes);
      writeGuessedLettersToDOM(guessedLettersInWord);
    }
  }
}

/**
 * Function to find the place of the clicked letter
 * @param clickedLetter The clicked letter
 * @param indexes The place of the letter
 */
function updateGuessedLettersOfWord(clickedLetter: string, indexes: number[]) {
  indexes.forEach(function(index) {
    guessedLettersInWord[index] = clickedLetter;
  });  
}

/**
 * Function to write the clicked letter to the string
 * @param clickedLetter The clicked letter
 */
function findLetter(clickedLetter: string): number[] {
  let indexes: number[] = [];
  for(let i:number = 0; i < lettersInWord.length; i++) {
    if(lettersInWord[i] === clickedLetter) {
      indexes.push(i);
    }
  }
  return indexes;
}
