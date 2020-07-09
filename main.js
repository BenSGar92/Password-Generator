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
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    // ".checked" is how you will get the true/false of whether the box is checked or not due to "type='checkbox'"
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    
    passwordEl.innerText = generatePassword(
        hasUpper,
        hasLower,
        hasNumber,
        hasSymbol,
        length
    );
})

// Generate Password Function (Need to create the password variable, filter the check boxes, loop the length, return final password)
function generatePassword(upper, lower, number, symbol, length) {


    let generatedPassword = '';

    const typesCount =  upper + lower + number + symbol;

    // This creates an array of objects using the curly brackets within an array
    // whatever is false needs to be filtered out - using a filter method
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item) [0]);
    // console.log(typesArr)

    // If none of the boxes are checked there needs to be a failsafe to not generate a password
    // using 'typesCount' to check and see if 0 boxes have been checked to return an empty string
    if(typesCount === 0) {
        return '';
    }

    // Loop over the length selected and generate the password
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log(funcName);

            // Whatever is selected will be appended onto this string
            generatedPassword += randomFunc[funcName]();
        })
    }
    // when length is 1, the password is still 4 characters long due to "typesCount" determining the set length. Utlizing ".slice" can alleviate that issue
    const finalPassword = (generatedPassword.slice(0, length));

    return finalPassword;
}



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
// This one grabs a symbol from a string of symbols using string index
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}