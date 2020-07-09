// Using this is my main javascript file
// DOM elements - These store the users input from the index.html document
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Events
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    // adding the '+' will make it an integer instead of a string. The '.value' will get you the value of the "type='number'"
    const hasLower = lowercaseEl.checked;
    // ".checked" is how you will get the true/false of whether the box is checked or not due to "type='checkbox'"


})



// These functions will grab the random number, letters and symbols from the Character Set table
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}