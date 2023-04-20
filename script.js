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


// After clicking Generate Password button, prompt for password length. 
function generatePassword() {
	var passwordLength = prompt("Please enter the number of characters you want for you new password. It must be between 8 and 128 characters.");
		window.passwordLengthGlobal = passwordLength;
		if (passwordLength >= 8 && passwordLength <= 128) {
				console.log(passwordLength);


// ask for lowercase letters and add if selected.
var lowercase = confirm("Would you like lower case letters?");
if (lowercase === true) {
	const lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	window.lowerAlphabetGlobal = lowerAlphabet;
} else {
	const lowerAlphabet = [];
	window.lowerAlphabetGlobal = lowerAlphabet;
}	
	
// ask for uppercase letters and add if selected.
var uppercase = confirm("Would you like upper case letters?");
if (uppercase === true) {
    const upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	window.upperAlphabetGlobal = upperAlphabet;
} else {
	const upperAlphabet = [];
	window.upperAlphabetGlobal = upperAlphabet;
}

// ask for numbers and add if selected.
var numbers = confirm("Would you like to include numbers?");
if (numbers === true) {
    const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	window.numericCharactersGlobal = numericCharacters;
} else {
	const numericCharacters = [];
	window.numericCharactersGlobal = numericCharacters;
}

// ask for special characters and add if selected.
var specialPasswordCharacters = confirm("Would you like special characters?");
if (specialPasswordCharacters === true) {
	const specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
	window.specialCharactersGlobal = specialCharacters;
} else {
	const specialCharacters = [];
	window.specialCharactersGlobal = specialCharacters;
}
}

// Return to beginning if the number of characters is not between 8 and 128.
else {
	return (generatePassword());
}





}