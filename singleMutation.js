function singleMutation(str1, str2) {
  let mutations = 0;
  for(let i=0, j=0; i<str1.length, j<str2.length; i++, j++) {
    if(str1[i] !== str2[j]) {
      mutations++;

      if(mutations > 1) {
        return false;
      }
      if(str1.length > str2.length) {
        j--;
      } else if(str1.length < str2.length) {
        i--;
      }
    }
  }
  return true;
}
//Time: O(n)
//Space: O(1)

//Single deletion, addition, substitution allowed.
// singleMutation('abcd', 'acd') => true
// singleMutation('abcd', 'ad') => false
// singleMutation('abcd', 'abcde') => true
// singleMutation('abcd', 'Xbcd') => true
// singleMutation('abXd', 'abcd') => true
