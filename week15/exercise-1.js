function countVowels(text) {
   //Start Coding Here
    let vowels = "aeiouAEIOU";
    let countVowels = 0;
    for (let char of text){
        if (vowels.includes(char)){
            countVowels++
            // console.log(countVowels)
        }
    }
return countVowels;
};

let result1 = countVowels("hello");
console.log(result1); // 2

let result2 = countVowels("TECHUP");
console.log(result2); // 2