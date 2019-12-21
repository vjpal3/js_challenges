const caesarCipher = (str, key) => {
    let result = [];
    for (let i = 0; i< str.length; i++) {
        let code = str.charCodeAt(i);
        let lower = 'a'.charCodeAt(0);
        let upper = 'A'.charCodeAt(0);

        if (code >= lower && code < lower + 26) 
            code = (code - lower + key) % 26 + lower;
        else if (code >= upper && code < upper + 26)
            code = (code - upper + key) % 26 + upper;
        
        result[i] = String.fromCharCode(code);
    }    
    return result.join('');
}

console.log(caesarCipher("I love JavaScript!", 100));
console.log(caesarCipher("I love JavaScript!", 50));
