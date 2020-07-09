// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword => {
    // const length = prompt("How long would you like your password to be? (Limit of 100 characters!");
    // const lower = confirm("Would you like to have lowercase letters?");
    // const upper = confirm("Would you like to have uppercase letters?");
    // const number = confirm("Would you like to have numbers?");
    // const symbol = confirm("Would you like to have symbols?");
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
// length would be something that is typed by the user but currently not sure how to make sure they type within the boundaries...may try to make this a slider selector
// lower, upper, number, symbol work great and evaluate to either true or false
    console.log(length, lower, upper, number, symbol);
})
// length variable may be a string and not an integer - utilize parseInt or '+' added before prompt may also work - console.log(typeof length) to check string or number


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