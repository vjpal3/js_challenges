const findMaxChar = str => {
    const charObj ={};
    for (let ch of str) {
        charObj[ch] = charObj[ch] + 1 || 1;
        // if (!charObj[ch]) {
        //     charObj[ch] = 0
        // }
        // charObj[ch]++;
    }
    let maxCount = 0;
    let maxChar = null;
    
    for (let ch in charObj) {
        if(charObj[ch] > maxCount) {
            maxCount = charObj[ch];
            maxChar = ch;
        }
    }

    // let maxChar = Object.keys(charObj).reduce((a, b) => {
    //     return charObj[a] > charObj[b] ? a : b
    // });
    return maxChar;
}

console.log("The most repeated character(s):", findMaxChar('abcdefbcrdf'));