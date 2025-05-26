function findMode(arr) {
   //Start Coding Here
   const countMode = arr.reduce((acc, num)=>{
    acc[num] = (acc[num] || 0) + 1;
    return acc
   },{})
//    console.log(countMode)
   let mode = null;
   let maxTimes = 0;
   for (let num of arr) {
    if(countMode[num] > maxTimes){
        mode = num;
        maxTimes = countMode[num]
    }
    // console.log(mode)
    // console.log(maxTimes)
   }
//    console.log(mode)
//     console.log(maxTimes)
    return mode;
};

let result1 = findMode([1, 2, 2, 3, 3, 3, 4]);
console.log(result1); // 3

let result2 = findMode([7, 7, 1, 1, 7]);
console.log(result2); // 7

let result3 = findMode([7, 7, 1, 1, 7, 1]);
console.log(result3); // 7