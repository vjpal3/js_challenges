function stringRotation(str1, str2) {
  return str1.length === str2.length && (str1 + str1).includes(str2);
}

//time-complexity O(n)
//space-complexity O(n)

stringRotation('rotation', 'otatio')
=> false

stringRotation('rotation', 'ationroy')
=> false

stringRotation('rotation', 'otationr')
=> true

stringRotation('rotation', 'otationr')
=> true

stringRotation('rotation', 'ationrot')
=> true

function stringRotation1(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  for(let i=0; i<str1.length; i++) {
    let rotation = str1.slice(i, str1.length) + str1.slice(0, i);
    if(rotation === str2) {
      return true;
    }
  }
  return false;
}
// Time complexity: O(n^2)
//Space Complexity: O(n)
