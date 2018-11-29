function isUniq(str) {
  let arr = str.split('').sort();
  for(let i=1; i<arr.length; i++) {
    if(arr[i] === arr[i-1])
      return false;
  }
  return true;
}

function isUniq_ES6(str) {
  return new Set(str).size === str.length;
}

console.log(isUniq('abcdAef')); //true
console.log(isUniq('80asw#4')); //true
console.log(isUniq('xzcvdvb')); //false
