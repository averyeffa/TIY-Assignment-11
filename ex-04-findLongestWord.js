/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

var findLongestWord = function(strOfWords){
  var lengthOfWord = 0;
  var longestWord = ('');
  strOfWords = strOfWords.split(' ');

  for (var i = 0; i < strOfWords.length; i++) {
    // strOfWords = strOfWords.replaceAll('\'','')
    if (strOfWords[i].length > lengthOfWord){
      lengthOfWord = strOfWords[i].length;
      longestWord = strOfWords[i];
    }
  }
  return longestWord
}


console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
