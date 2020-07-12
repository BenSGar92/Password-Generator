# Week-3-HW
Week 3 HW - Password Generator

-Began with the default layout provided and decided to have checkboxes and number inputs rather than prompts and alerts

-Added the necessary html and css for the checkboxes and number inputs on lines 38-66 in html

-Created the 4 functions getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol on main.js lines 75-90 that will grab the necessary random number/symbol/letter from the charset table

-Created an object out of those 4 functions as well as the necessary variables to reference the document using document.getElementById on main.js lines 2-8

-Created an eventListener on main.js line 18 to capture the values inputed by the user. .value and .checked

-Created a function that would build on a string based on the length and the selected checkboxes from the user. Any unchecked boxes would be filtered out

-Created a loop within the generatePassword function to loop over the length selected by the user

-Had an issue with the password generating more length than what was selected when going below 4 due to the typesCount based on the number of boxes checked, added a slice element to alleviate issue

-Saw that we needed parameters for the password length so I added an if function to give the password output length parameters between 8-128

-Styled the CSS to have a matrix/hacker theme and finalized the project