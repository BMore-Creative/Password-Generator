// Special character array for password generation
const specialCharacters = [
  '!',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  '\\',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~'
];

// Numeric character array for password generation
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Lowercase character array for password generation
const lowercaseCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Uppercase character array for password generation
const uppercaseCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function choosePasswordOptions() {
  const userLength = prompt('How many characters would you like your password to have?');
  const length = parseInt(userLength, 10);
  
  if (length < 8) {
    alert('Error: Password length must be greater than 7 characters');
    return null;
  };

  if (length > 128) {
    alert('Error: Password length must be less than 129 characters');
    return null;
  };

  if (Number.isNaN(length)){
    alert('Error: Password length must be given as a number')
    return null;
  };

  const hasSpecialCharacters = confirm('Click OK to have password include special characters');

  const hasNumericCharacters = confirm('Click OK to have password include numeric characters');

  const hasLowercaseCharacters = confirm('Click OK to have password include lowercase characters');

  const hasUppercaseCharacters = confirm('Click OK to have password include uppercase characters');

  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowercaseCharacters === false &&
    hasUppercaseCharacters === false
    ) {
      alert('Password must have at least one type of character');
      return null;
    };

  const passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowercaseCharacters: hasLowercaseCharacters,
    hasUppercaseCharacters: hasUppercaseCharacters
  };
  
  return passwordOptions;
};
function generatePassword() {
  const options = choosePasswordOptions();
  
  function random(array) {
    const randNum = Math.floor(Math.random() * array.length);
    const randSelection = array[randNum];
    return randSelection;
  }

  let genPass = [];
  
  let characterOptions = [];

  let requiredCharacters = [];

  if (options.hasSpecialCharacters === true) {
    characterOptions = characterOptions.concat(specialCharacters);
    requiredCharacters.push(random(specialCharacters));
  };

  if (options.hasNumericCharacters === true) {
    characterOptions = characterOptions.concat(numericCharacters);
    requiredCharacters.push(random(numericCharacters));
  };

  if (options.hasLowercaseCharacters === true) {
    characterOptions = characterOptions.concat(lowercaseCharacters);
    requiredCharacters.push(random(lowercaseCharacters));
  };

  if (options.hasUppercaseCharacters === true) {
    characterOptions = characterOptions.concat(uppercaseCharacters);
    requiredCharacters.push(random(uppercaseCharacters));
  };

  for (let i = 0; i < options.length; i++) {
    let characterOption = random(characterOptions);

    genPass.push(characterOption);
  };

  for (let i = 0; i < requiredCharacters.length; i++) {
    genPass[i] = requiredCharacters[i];
  };

  console.log(characterOptions, requiredCharacters);
  return genPass.join('');
};

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
