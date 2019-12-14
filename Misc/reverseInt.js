const reverseInt = number => {
    let reversed = number
                        .toString()
                        .split('')
                        .reduce((result, val) => {
                            return val + result;
                        });
    return parseInt(reversed) * Math.sign(number);
}

console.log(reverseInt(-123));
console.log(reverseInt(12345));
