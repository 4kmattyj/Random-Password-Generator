// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var passwordLength = 64;
  var password = "";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


for (var i = 0; i <= passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
}

document.getElementById("password").value = password;

// Add event listener to generate button



// const characterAmountRange = document.getElementById ('characterAmountRange')
// const characterAmountNumber = document.getElementById ('characterAmountNumber')
// const form = document.getElementById('passwordGeneratorForm')


// characterAmountNumber.addEventListener('input', syncCharacterAmount)
// characterAmountRange.addEventListener('input', syncCharacterAmount)

// FormData.addEventListener('submit', e => {
//   e.preventDefault()
//   const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
// })

// function syncCharacterAmount(e) {
//   const value = e.target.value
//   characterAmountNumber.value = value
//   characterAmountRange.value = value
// }


//   FormData.addEventListener("submit", e => {
//   e.preventDefault()
//   const characterAmount = characterAmountNumber.value
//   const includeUppercase = characterUppercaseElement.checked
//   const includeNumbers = includeNumberElement.checked
//   const includeSymbols = includeSymbols.checked