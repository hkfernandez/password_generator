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

var length = prompt ("Enter your prefered length of password from 8 to 128 characters");
alert ("You will now confim which character types your would like to use in your password. Please answer (y)es or (n)o to the following questions.");
var lower = prompt ("Would you like to use lowercase letters in your password? (y)es or (n)o");
var upper = prompt ("Would you like to use uppercase letters in your password? (y)es or (n)o");
var numeric = prompt ("Would you like to use numeric characters in your password? (y)es or (n)o");
var special = prompt ("Would you like to use special characters in your password? (y)es or (n)o");
alert ("Great! That is all the information we needed to create your password. Click on the generate password button below.)
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
