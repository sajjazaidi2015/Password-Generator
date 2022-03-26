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

function getRandom(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function generatePassword() {
  //  With Prompt you ask user the length of the password
  //     - user will input a number
  let inputLength = prompt(
    "What is the lenght of the password should be in between 8 to 128"
  );
  //  Validate length should be greater of equal to 8 and less then or equal to 128
  if (inputLength >= 8 && inputLength <= 128) {
    console.log("the password is generated");
  } else {
    console.log("password is not generated");
    return " Password cannot be generated";
  }

  //  With Prompt you ask user if Lowecase should be included (Yes/ No) (true/ false)
  let includeLowerCase = confirm(
    "Would you like to include the includeLowercase in the password"
  );

  //  With Prompt you ask user if Uppercase should be included (Yes/ No) (true/ false)
  let includeUpperCase = confirm(
    "Would you like to include the includeUppercase in the password"
  );

  //  With Prompt you ask user if numeric values should be included (Yes/ No) (true/ false)
  let includeNumeric = confirm(
    "Would you like to include the numeric in the password"
  );

  //  With Prompt you ask user if Special characters should be included (Yes/ No) (true/ false)
  let includeSpecialCharactor = confirm(
    "Would you like to include the special charactor in the password"
  );
  // If password length is in between 8 to 128 but all other condition are false
  if (
    includeLowerCase === false &&
    includeUpperCase === false &&
    includeNumeric === false &&
    includeSpecialCharactor === false
  ) {
    return "No password criteria is selected";
  }

  //  Define an array of Lowercase Alphabets
  let lowerCaseAlphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "z",
  ];

  //  Define an array of Uppercase Alphabets
  let upperCaseAlphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "Z",
  ];

  //  Define an array of numeric characters 0-9
  let numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  //  Defnine an array of Special characters
  let specialCharactor = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "{",
    "}",
    ":",
    "?",
    ">",
    "<",
  ];
  //  Define an empty output array
  let output = [];
  //  Loop number of times the length of the password
  for (let index = 0; index < inputLength; index++) {
    // if lowerCase as Yes - randomly pick lowercase and push it into output array
    if (includeLowerCase === true) {
      const item = getRandom(lowerCaseAlphabets);
      output.push(item);
    }
    // if upperCase as Yes - randomly pick uppercase and push it into output array
    if (includeUpperCase === true) {
      const item = getRandom(upperCaseAlphabets);
      output.push(item);
    }
    // if numeric as Yes - randomly pick numeric and push it into output array
    if (includeNumeric === true) {
      const item = getRandom(numeric);
      output.push(item);
    }
    // if special character as Yes - randomly pick special character and push it into output array
    if (includeSpecialCharactor === true) {
      const item = getRandom(specialCharactor);
      output.push(item);
    }
  }
  //  trim the length of output array to match the inputLength
  const splicedOutput = output.splice(0, inputLength);
  //  convert array into string using join('')
  return splicedOutput.join("");
}
