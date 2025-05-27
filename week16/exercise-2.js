function getAdults(people) {
   //Start Coding Here
   let adults = [];
   for (let i=0; i<people.length; i++){
    if(people[i].age >= 18){
        adults.push(people[i].name)
    }
   }
//    console.log(adults)
   return adults;
};

let result1 = getAdults([
   { name: "Alice", age: 22 },
   { name: "Bob", age: 17 },
   { name: "Charlie", age: 30 }
]);
console.log(result1); // ["Alice", "Charlie"]