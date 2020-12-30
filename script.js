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

//building an array of arrays of character types based on user preference
//generate rondom indexes of the array and its nested arrays to select a random character
//add the random characters to the password

var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbersArr = ["1","2","3","4","5","6","7","8","9"];
var specialCharArr = ["!", "@", "#", "$", "%", "&", "*", "?"];

var pwLength = 0;
var charArr = []
var password = ""

var lowerPrompt = "Would you like to use lowercase letters in your password? (y)es or (n)o"
var upperPrompt = "Would you like to use uppercase letters in your password? (y)es or (n)o"


alert ("We'll help you set up a randomly generated password on your preferences. Please answer the following questions.") 

// Checks if user entry is in range and is a number
function lengthValidate (numLength) {
  while (numLength < 8 || numLength > 128 || isNaN (numLength)) {
    var numLength = parseInt (prompt ("Enter your prefered length of password from 8 to 128 characters"));
  }
  return numLength;
}
var pwLength = lengthValidate (pwLength);

//checks is user entry is a "y" or "n"
function yesNoValidate (userInput, promptType) {
  while (userInput != "y" && userInput != "n"){
    var userInput = prompt ( promptType );
  }
  return userInput;
}

//if user chooses lowercase characters they are pushed to the array
var lowerChoice = yesNoValidate (lowerChoice, lowerPrompt);
if (lowerChoice === "y") {
 charArr.push (lowerArr);
 alert ("Lowercase characters added");
 console.log (charArr);
}

var upperChoice = yesNoValidate (upperChoice, upperPrompt);
if (upperChoice === "y") {
 charArr.push (upperArr);
 alert ("Uppercase characters added");
 console.log (charArr);
}

// var lower = prompt ("Would you like to use uppercase letters in your password? (y)es or (n)o");
// if (lower == "y") {
//  charArr.push (upperArr)
//  alert ("Uppercase characters added");
//  console.log (charArr);
// }

var lower = prompt ("Would you like to use numbers in your password? (y)es or (n)o");
if (lower == "y") {
 charArr.push (numbersArr)
 alert ("Numbers added");
 console.log (charArr);
}

var lower = prompt ("Would you like to use special characters in your password? (y)es or (n)o");
if (lower == "y") {
 charArr.push (specialCharArr)
 alert ("Special characters added");
 console.log (charArr);
}

alert ("Great! That is all the information we needed to create your password. Click on the generate password button below.");

//returns a random index of the array it is called on
function arrIndexGen (arr) {
 return Math.floor( Math.random () * arr.length);
}


//returns a random index of the array inside the array it is called on
function nestArrIndexGen (arr, arrIndex) {
  return Math.floor( Math.random () * arr[arrIndex].length) ;
}


for (i=0; i < pwLength; i++) {
  var charTypeIndex =  arrIndexGen (charArr);
  var charIndex = nestArrIndexGen (charArr, charTypeIndex);
  password += charArr [charTypeIndex] [charIndex] ;
};
console.log (password);

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
