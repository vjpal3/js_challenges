// function diffArray(arr1, arr2) {
//     var newArr = [];
//     // Same, same; but different.
//     arr1.forEach(elem => {
//       if(arr2.indexOf(elem) === -1)
//         newArr.push(elem);
//     })
//     arr2.forEach(elem => {
//       if(arr1.indexOf(elem) === -1)
//         newArr.push(elem);
//     })
//     return newArr;
//   }

// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }

function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
}
function diff(arr1, arr2) {
  return arr1.filter(item => arr2.indexOf(item) === -1);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
