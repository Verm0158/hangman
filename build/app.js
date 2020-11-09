window.addEventListener("load", init);
let word = "butterscup";
let lettersInWord = word.split("");
let guessedLettersInWord = [];
const lettersInDOM = document.querySelector("#letters");
const attemptInDOM = document.querySelector("#attempt");
let attempts = 5;
function init() {
    writeAlphabetToTheDom();
    guessedLettersLength();
}
function guessedLettersLength() {
    for (let i = 0; i < lettersInWord.length; i++) {
        guessedLettersInWord.push("-");
    }
    writeGuessedLettersToDOM(guessedLettersInWord);
}
function writeGuessedLettersToDOM(guessedLetters) {
    lettersInDOM.innerHTML = "";
    guessedLetters.forEach(function (letter) {
        const letterElement = document.createElement("li");
        letterElement.innerHTML = letter;
        lettersInDOM.append(letterElement);
    });
}
function writeAlphabetToTheDom() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const keyboard = document.querySelector("#keyboard");
    alphabet.forEach(function (element, index) {
        let divKey = document.createElement("div");
        divKey.id = element;
        divKey.classList.add("key");
        divKey.innerHTML = element;
        keyboard.append(divKey);
    });
}
//# sourceMappingURL=app.js.map