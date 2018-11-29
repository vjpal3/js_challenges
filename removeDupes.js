function removeDupes_ES6(str) {
  return [... new Set(str)].join('');
}
//time-complexity O(n)
//space-complexity O(n)

function removeDupes(str) {
  const arr = str.split('').sort();
  for(let i=1; i<arr.length; i++) {
    if(arr[i] === arr[i-1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.join('');
}

removeDupes('aabvcdfsa')
=> 'abcdfsv'

removeDupes('aabbccdd')
=> 'abcd'

//time-complexity O(n log n)
//space-complexity O(n)
