
/**
 * Ex-01 : sumPositives()
 *
 *  Write a function called sumPositives that takes an array of numbers and
 *  only adds the positive numbers
 *
*/

// Input: array of numbers
// Output: number

var sumPositives = function(numArray){
  var sumOfNum = 0;

  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      sumOfNum = sumOfNum + numArray[i];
    }
  }
  return sumOfNum;
}




console.assert(sumPositives([3, -1, 4, 5, -3, -4]) === 12);
console.assert(sumPositives([-11, 30,-20, 40, 100]) === 170);
console.assert(sumPositives([4 ,-10,-30, -4, 201]) === 205);
