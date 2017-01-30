
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
**/

// Input: string
// Output: reduced boolean

var hasDoubleLetters = function (inputStr){
  var doubleLetters = false;

  for (var i = 0; i < inputStr.length; i++) {
    inputStr = inputStr.toLowerCase();

    if (inputStr[i] === inputStr[i+1]) {
      doubleLetters = true;
    }
  }
  return doubleLetters;
}


console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )
