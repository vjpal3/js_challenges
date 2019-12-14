const reverseString = str => str.split('').reverse().join('');
console.log(reverseString('do exercise'));

const reverseString1 = str => {
    let reversed = '';
    for(let ch of str) {
        reversed = ch + reversed;
    }
    return reversed;
}
console.log(reverseString1('Learn React'));

const reversedString2 = str => {
    return str.split('').reduce((reversed, ch) => {
        return ch + reversed;
    });
}
console.log(reversedString2('Practise TDD'));










