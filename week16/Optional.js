function groupBy(items, property) {
  //Start Coding Here
  let groupedItem = items.reduce((acc, item) => {
    if (!acc[item[property]]) {
      acc[item[property]] = [];
    }

    acc[item[property]].push(item);
    // console.log(acc);
    return acc;
  }, {});

  return groupedItem;
}

let result1 = groupBy(
  [
    { name: "Apple", type: "fruit" },
    { name: "Broccoli", type: "vegetable" },
    { name: "Banana", type: "fruit" },
  ],
  "type"
);

console.log(result1);
// {
//   fruit: [
//     { name: "Apple", type: "fruit" },
//     { name: "Banana", type: "fruit" }
//   ],
//   vegetable: [
//     { name: "Broccoli", type: "vegetable" }
//   ]
// }
