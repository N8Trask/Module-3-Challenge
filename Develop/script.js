// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of options for password
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numericArray = ["1","2","3","4","5","6","7","8","9","0"];

var specialCharacters = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","}","~"];


// Write password to the #password input
function writePassword() {

  var chooseLength = prompt("How many characters would you like? Choose between 8 and 128.");

  if (chooseLength<8 || chooseLength>128) window.alert("Password is either too short or too long.");
  if(isNaN(chooseLength))window.alert("Invalid Input");
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 