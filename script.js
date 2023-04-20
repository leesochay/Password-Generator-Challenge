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

function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want for you new password.", "It must be between 12 and 128 characters.");
    var lowercase = confirm("Would you like lower case letters?");
    var uppercase = confirm("Would you like upper case letters?");
    var specialCharacters = confirm("Would you like to use special characters?");
   
  }