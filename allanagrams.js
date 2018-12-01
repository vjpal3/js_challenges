function getCharCount(str) { //O(n)
  const charCount = {}
  for(let i=0; i<str.length; i++) {
    if(charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
  }
  return charCount;
}

function allAnagramsEfficient(strings) {
  for(let i=1; i<strings.length; i++) { //O(a)
    if(strings[i].length !== strings[0].length) {
      return false;
    }
  }
  const firstCharCount = getCharCount(strings[0]); //O(s), space:O(s)

  for(let i=1; i<strings.length; i++) { //O(a * s)
    let currentCharCount = getCharCount(strings[i]); //O(s), space:O(s)
    for(let char in currentCharCount) { //O(s)
      if(currentCharCount[char] !== firstCharCount[char]) {
        return false;
      }
    }
  }
  return true;
}
// Time: O(a * s)
// space: O(s)


function allAnagrams(strings) { //s - length of string, a - length of array
  let sortedStrings = strings.map((item) => {
    return item.split('').sort().join(''); // a * (s + s * log(s) + s)
  });

  return sortedStrings.every((item) => {
    return item === sortedStrings[0];
  });
}

// Time: O(a * s * log(s))
// space: O(a * s)
// allAnagrams(['abcd', 'acdb', 'dabc']) => true
// allAnagrams(['abcd', 'acdb', 'daba']) => false
// allAnagrams(['abcd', 'acdb', 'dabaa']) => false
