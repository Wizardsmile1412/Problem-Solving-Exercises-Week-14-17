function removeDuplicates(arr) {
   //Start Coding Here
  let removeDuplicate=[];
  for (let i=0; i<arr.length; i++){
   if(!removeDuplicate.includes(arr[i])){
      removeDuplicate.push(arr[i])
   }
  }
//   console.log(removeDuplicate)
  return removeDuplicate
};

let result1 = removeDuplicates([1, 2, 2, 3, 3, 3]);
console.log(result1); // [1, 2, 3]

let result2 = removeDuplicates([5, 5, 5, 5]);
console.log(result2); // [5]