// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// psuedo code
// ask the user for password preferences
// return a password that meets those criteria
// ***********
// collect the users preferences via prompts
// error check the users responses and reprompt if needed
// create a variable for of the number of characters the user wants
// create an array that contains the user character preferences
// create a loop that runs the number as many times as characters in the password
// each time the loop runs a random number is generated and a different type of character is selected from the array

console.log ("@")

var arrAlphabet = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var arrNumbers = ("1","2","3","4","5","6","7","8","9");
var arrSpecialChar = ("!", "@", "#", "$", "%", "&", "*", "?");



var length = prompt ("Enter your prefered length of password from 8 to 128 characters");
if (typeof length == "") {

}
alert ("You will now confim which character types your would like to use in your password. Please answer (y)es or (n)o to the following questions.");
var lower = prompt ("Would you like to use lowercase letters in your password? (y)es or (n)o");
var upper = prompt ("Would you like to use uppercase letters in your password? (y)es or (n)o");
var numeric = prompt ("Would you like to use numeric characters in your password? (y)es or (n)o");
var special = prompt ("Would you like to use special characters in your password? (y)es or (n)o");
alert ("Great! That is all the information we needed to create your password. Click on the generate password button below.");
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
