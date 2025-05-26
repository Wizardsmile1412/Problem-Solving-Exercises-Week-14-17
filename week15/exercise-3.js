function getPassedStudents(students) {
   //Start Coding Here
   let passedStudents = [];
   for (let i=0; i<students.length; i++){
      if(students[i].score>=50){
         passedStudents.push(students[i].name)
         // console.log(passedStudents)
      }
   }
   return passedStudents;
};

let result1 = getPassedStudents([
   { name: "A", score: 80 },
   { name: "B", score: 45 },
   { name: "C", score: 60 }
]);
console.log(result1); // ["A", "C"]