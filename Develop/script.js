// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of options for password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "~"];

function randomNumber(numberRandom) {
  var randomInput = Math.floor(Math.random() * numberRandom.length);
  var userInput = numberRandom[randomInput]
  return userInput;
}
// Write password to the #password input
function writePassword() {
  // a prompt to choose how many charcters the user would like in the password
  var chooseLength = prompt("How many characters would you like? Choose between 8 and 128.");
  var chosenLength = parseInt(chooseLength)
  if (chosenLength < 8 || chosenLength > 128) {
    window.alert("Password is either too short or too long.")
    writePassword();
  };
  if (isNaN(chosenLength)) {
    window.alert("Invalid Input");
    writePassword();
  };
  // user choices for what the password contains
  var lowerCaseOK = confirm('Click OK to to use lowercase letters.');
  var upperCaseOK = confirm('Click OK to use uppercase letters.');
  var numericArrayOK = confirm('Click OK to use numbers.');
  var specialCharactersOK = confirm('Click OK to use special characters.');

  // conditional statement to ensure user picks at least one of the options
  if (
    (lowerCaseOK) !== true &&
    (upperCaseOK) !== true &&
    (numericArrayOK) !== true &&
    (specialCharactersOK) !== true
  ) {
    window.alert("Invalid input, must select one or more value to proceed.");
    writePassword();
  }


  //Array for random characters
  var randomCharacters = [];

  // Array for results to be pushed
  var result = [];


  // Array for user selected charcters
  var userSelcted = [];

  //if statements to grab the selected array

  if (lowerCaseOK === true) {
    userSelcted = userSelcted.concat(lowerCase);
  }


  if (upperCaseOK === true) {
    userSelcted = userSelcted.concat(upperCase);
  }


  if (numericArrayOK === true) {
    userSelcted = userSelcted.concat(numericArray);
  }


  if (specialCharactersOK === true) {
    userSelcted = userSelcted.concat(specialCharacters);
  }

  // for loop to grab random characters from selected choices in selected length
  for (let i = 0; i < chosenLength; i++) {
    randomCharacters = randomNumber(userSelcted);
    result.push(randomCharacters);
  }
  //logs results in the selected length
  console.log(result);

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //displays password
  var password = result.join('');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);