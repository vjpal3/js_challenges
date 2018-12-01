function sortedSearch(arr, target) {
  let left = 0, right = arr.length -1;
  if(target < arr[left] || target > arr[right]) {
    return -1;
  }

  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;

  // Time: O(log(n))
  //Space: O(1)

//brute force:
  // for(let i=0; i<arr.length; i++) {
  //   if(arr[i] === num) {
  //     return i;
  //   }
  // }
  // return -1;
  // Time: O(n)
  //Space: O(1)
}

// sortedSearch([1, 4, 6, 8], 0) => -1
// sortedSearch([1, 4, 6, 8], 5) => -1
// sortedSearch([1, 4, 6, 8], 8) => 3
