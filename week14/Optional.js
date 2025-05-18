function isPalindrome(word) {
  //Start Coding Here
  let arrayText = word.split("");
  //    console.log(arrayText)
  let reverseText = "";
  for (let i = arrayText.length - 1; i >= 0; i--) {
    reverseText += arrayText[i];
    // console.log(reverseText)
  }
  
  if(reverseText === word){
    return true;
  }else{
    return false;
  }
}

let result1 = isPalindrome("madam");
console.log(result1); // true

let result2 = isPalindrome("hello");
console.log(result2); // false
