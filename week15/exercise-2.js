function sumEvenNumbers(numbers) {
   //Start Coding Here
   let sumEven = 0;
   for (let i=0; i<numbers.length; i++){
    if(numbers[i]%2 === 0){
        sumEven += numbers[i]
        // console.log(sumEven)
    }
   }
return sumEven;
};

let result1 = sumEvenNumbers([1, 2, 3, 4]);
console.log(result1); // 6

let result2 = sumEvenNumbers([7, 11, 20, 8]);
console.log(result2); // 28