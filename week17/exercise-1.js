function findCommon(arr1, arr2) {
   //Start Coding Here
   let commonItems = arr1.filter((item)=> arr2.includes(item))
   console.log(commonItems)
   return commonItems
};

let result1 = findCommon([1, 2, 3], [2, 3, 4]);
console.log(result1); // [2, 3]

let result2 = findCommon([5, 6], [7, 8]);
console.log(result2); // []