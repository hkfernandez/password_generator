// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password == undefined){
    return;
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  //building an array of arrays of character types based on user preference
  //generate rondom indexes of the array and its nested arrays to select a random character
  //add the random characters to the password

  var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numbersArr = ["1","2","3","4","5","6","7","8","9"];
  var specialCharArr = ["!", "@", "#", "$", "%", "&", "*", "?"];
  var pwLength = 0;
  var charArr = []
  var lowerPrompt = "Would you like to use lowercase letters in your password? (y)es or (n)o"
  var upperPrompt = "Would you like to use uppercase letters in your password? (y)es or (n)o"
  var numPrompt = "Would you like to use numbers in your password? (y)es or (n)o"
  var specialCharPrompt = "Would you like to use special characters in your password? (y)es or (n)o"
  var passwordRandom = ""
  var sessionCanceledAlert = "Session canceled"

  alert ("We'll help you set up a randomly generated password based on your preferences. Please answer the following questions.");

  // Checks if user entry for password length is in range and is a number
  function lengthValidate (userInput) {
    while (userInput < 8 || userInput > 128 || isNaN (userInput) || userInput == null) {
      var userInput = prompt ("Enter your prefered length of password from 8 to 128 characters");
      if (userInput == null) {
        return;
      }
      var numLength = parseInt (userInput) ;
    }
    if (numLength == NaN) {
      return undefined;
    } else {
      return numLength;
    }
  }
  
  var pwLength = lengthValidate (pwLength);
  if (pwLength === undefined) {
    alert (sessionCanceledAlert);
    return;
  }

  //checks is user entry is a "y" or "n"
  function yesNoValidate (userInput, promptType) {
    while (userInput != "y" && userInput != "n"){
      var userInput = prompt ( promptType );
      if (userInput == null) {
        break;
      }
    }
    if (userInput == "y" || userInput == "n"){
      return userInput;
    } else {
      return null;
    }
  }

  //validates users choices and pushes them to the character array
  var lowerChoice = yesNoValidate (lowerChoice, lowerPrompt);
  if (lowerChoice == "y") {
  charArr.push (lowerArr);
  alert ("Lowercase characters added");
  } else if (lowerChoice == null) {
    return;
  }

  var upperChoice = yesNoValidate (upperChoice, upperPrompt);
  if (upperChoice === "y") {
  charArr.push (upperArr);
  alert ("Uppercase characters added");
  } else if (upperChoice == null) {
    return;
  }

  var numChoice = yesNoValidate (numChoice, numPrompt);
  if (numChoice === "y") {
  charArr.push (numbersArr);
  alert ("Numbers added");
  } else if (numChoice == null) {
    return;
  }

  var specialCharChoice = yesNoValidate (specialCharChoice, specialCharPrompt);
  if (specialCharChoice=== "y") {
  charArr.push (specialCharArr);
  alert ("Special characters added");
  } else if (specialCharChoice == null) {
    return;
  }

  //returns a random index of the array it is called on
  function arrIndexGen (arr) {
  return Math.floor( Math.random () * arr.length);
  }

  //returns a random index of the array inside the array it is called on
  function nestArrIndexGen (arr, arrIndex) {
    return Math.floor( Math.random () * arr[arrIndex].length) ;
  }
  if (charArr[0] == undefined){
    alert ("You must select a minimum of 1 character type for your password. If you would like to continue creating a password, click on the 'Create Password' button below to enter your preferences.")
  return;
  }
  
  //loops through array of character types and randomly selects characters
  for (i=0; i < pwLength; i++) {
    var charTypeIndex =  arrIndexGen (charArr);
    var charIndex = nestArrIndexGen (charArr, charTypeIndex);
    passwordRandom += charArr [charTypeIndex] [charIndex] ;
  };

  return passwordRandom;
}