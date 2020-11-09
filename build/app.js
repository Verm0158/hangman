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
    keyboard.addEventListener("click", guessLetter);
    alphabet.forEach(function (element, index) {
        let divKey = document.createElement("div");
        divKey.id = element;
        divKey.classList.add("key");
        divKey.innerHTML = element;
        keyboard.append(divKey);
    });
}
function guessLetter(event) {
    const target = event.target;
    if (target.id !== "keyboard") {
        const clickedLetter = target.id;
        const indexes = findLetter(clickedLetter);
        if (indexes.length > 0) {
            updateGuessedLettersOfWord(clickedLetter, indexes);
            writeGuessedLettersToDOM(guessedLettersInWord);
        }
    }
}
function updateGuessedLettersOfWord(clickedLetter, indexes) {
    indexes.forEach(function (index) {
        guessedLettersInWord[index] = clickedLetter;
    });
}
function findLetter(clickedLetter) {
    let indexes = [];
    for (let i = 0; i < lettersInWord.length; i++) {
        if (lettersInWord[i] === clickedLetter) {
            indexes.push(i);
        }
    }
    return indexes;
}
//# sourceMappingURL=app.js.map