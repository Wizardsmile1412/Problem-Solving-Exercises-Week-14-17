function reverseString(text) {
   //Start Coding Here
   let arrayText = text.split('')
//    console.log(arrayText)
   let reverseText = ""
   for (let i = arrayText.length-1; i >= 0; i--){
    reverseText += arrayText[i];
    // console.log(reverseText)
   }
   return reverseText;
};

let result1 = reverseString("hello");
console.log(result1); // "olleh"

let result2 = reverseString("TechUp");
console.log(result2); // "pUhceT"