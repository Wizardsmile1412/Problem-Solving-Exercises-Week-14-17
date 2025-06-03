function findLongestWord(text) {
  //Start Coding Here
  let charlength = 0;
  let longestWord = null;
  let words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > charlength) {
      charlength = words[i].length;
      longestWord = words[i];
    //   console.log(longestWord);
    }
  }

  return longestWord;
}

let result1 = findLongestWord("I love programming very much");
console.log(result1); // "programming"

let result2 = findLongestWord("TechUp helps people switch careers");
console.log(result2); // "careers"
