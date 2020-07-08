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
    const length = prompt("How long would you like your password to be? (Limit of 100 characters!");
    const lower = confirm("Would you like to have lowercase letters?");
    const upper = confirm("Would you like to have uppercase letters?");
    const number = confirm("Would you like to have numbers?");
    const symbol = confirm("Would you like to have symbols?");
// length would be something that is typed by the user but currently not sure how to make sure they type within the boundaries...may try to make this a slider selector
// lower, upper, number, symbol work great and evaluate to either true or false
    console.log(length, lower, upper, number, symbol);
})
// length variable may be a string and not an integer - utilize parseInt or '+' added before prompt may also work - console.log(typeof length) to check string or number