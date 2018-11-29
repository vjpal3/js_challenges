function flatten(arr) {
  const newArr = [];
  for(let i=0; i<arr.length; i++) {
    let curElement = arr[i];
    if(Array.isArray(curElement)) {
      let flatItem = flatten(curElement);
      for(let j=0; j<flatItem.length; j++) {
        newArr.push(flatItem[j])
      }
    }
    else {
      newArr.push(curElement);
    }
  }
  return newArr;
}

flatten(['abc', ['def', ['ghi', ['jkl']]]]);
=> [ 'abc', 'def', 'ghi', 'jkl' ]

flatten([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]])
=> [ 0, 1, 2, 3, 4, 5 ]

flatten([1, 2, [3, 4], [[5]]])
=> [ 1, 2, 3, 4, 5 ]
