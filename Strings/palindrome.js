const isPalindrome = str => {
    str = getAlphabets(str);
    let reversed = str.split('').reduce((result, ch) => {
        return ch + result;
    })
    return str === reversed;
}

const getAlphabets = str => str.replace(/[^a-zA-Z]+/g, '').toLowerCase();

console.log(isPalindrome('laCd-9dca?!l'));
console.log(isPalindrome("Cigar? Toss it in a can. It is so tragic"));
console.log(isPalindrome("sit ad est love"));

const isPalindrome1 = str => {
    str = getAlphabets(str);
    for(let i = 0; i < str.length/2; i++) {
        if(str[i] !== str[str.length-i - 1])
            return false;
    }
    return true;
}
console.log();
console.log(isPalindrome1('laCd-9dca?!l'));
console.log(isPalindrome1("sit ad est love"));