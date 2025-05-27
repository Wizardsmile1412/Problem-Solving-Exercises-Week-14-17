function capitalizeWords(sentence) {
   //Start Coding Here
   let wordArr = sentence.split(" ")
//    console.log(wordArr)
   let newWordArr = [];
   for (let i=0; i<wordArr.length; i++){
    newWordArr.push(wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1))
    // console.log(newWordArr)
   }
   let newSentence = newWordArr.join(" ")
//    console.log(newSentence)
   return newSentence
};

let result1 = capitalizeWords("hello world");
console.log(result1); // "Hello World"

let result2 = capitalizeWords("techup career prep");
console.log(result2); // "Techup Career Prep"