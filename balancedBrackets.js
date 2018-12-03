function isBalanced(str) {
  const open = '({[';
  const close =']})';
  const openStack = [];
  const matches = {
    ')' : '(',
    '}' : '{',
    ']' : '[',
  }

  for(let i=0; i<str.length; i++) {
    let ch = str[i];
    if(open.includes(ch)) {
      openStack.push(ch);
    }
    else if(close.includes(ch)) {
      let openBracket = openStack.pop();
      if(matches[ch] !== openBracket) {
        return false;
      }
    }
  }
  return !openStack.length;
}

// Time: O(n)
// Space: O(n)

// console.log(
//   isBalanced("([)]"),
//   isBalanced("Hi! What is your name again (I forgot)?"),
//   isBalanced("Hi! What is (your name again? I forgot")
// ); => false true false
//
// isBalanced("(((10) ()) ((x: )))")   => true
