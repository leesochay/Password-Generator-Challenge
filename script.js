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
    var passwordLength = prompt("Please enter the number of characters you want for you new password.");

if (passwordLength < 8 || passwordLength > 128) {
	var passwordLength = prompt("It must be between 8 and 128 characters.");
}	


var lowercase = confirm("Would you like lower case letters?");

function generateLowercaseRandomLetter() {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
  return lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)]

}
console.log(generateLowercaseRandomLetter());

var uppercase = confirm("Would you like upper case letters?");

function generateUppercaseRandomLetter() {
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)]

   }

console.log(generateUppercaseRandomLetter());


var specialCharacters = confirm("Would you like to use special characters?");

function generateSpecialCharacters() {
    const specialPasswordCharacters = "@%+/\'!#$^&()*,-.:;<=>?[]_`{|}~"
    return specialPasswordCharacters[Math.floor(Math.random() * specialPasswordCharacters.length)]

   }

console.log(generateSpecialCharacters());

var numeric = confirm("Would you like to use numeric characters?");

function generateNumericCharacters() {
    const numericCharacters = "0123456789"
    return numericCharacters[Math.floor(Math.random() * numericCharacters.length)]

   }

console.log(generateNumericCharacters());

}
