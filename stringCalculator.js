function calculate1(expression) {  //"10 + 13"
    let strArr = expression.split(" ");
    let operators = '+-x/%';
    let result = 0;
    let numArr = [];
    let operator = '';
    for (let i = 0; i < strArr.length; i++) {
        let val = parseInt(strArr[i]);
        if (isNaN(val)) {
            operator = operators[operators.indexOf(strArr[i])]           
        }
        else {
            numArr.push(val);
        }         
    }
    switch(operator) {
        case '+' :
            result = numArr[0] + numArr[1];
            break;
        case '-' :
            result = numArr[0] - numArr[1];
            break;
        case 'x' :
            result = numArr[0] * numArr[1];
            break; 
        case '/' :
            result = numArr[0] / numArr[1];
            break; 
        case '%':
            result = numArr[0] % numArr[1];
            break;       
    }
    return result;
}

function calculate2(expression) { 
    let strArr = expression.split(" ");
    let operators = '+-x/%';
    let total = 0;
    let numArr = [];
    let opArr = [];
    for (let i = 0; i < strArr.length; i++) {
        let val = parseInt(strArr[i]);
        if (isNaN(val)) {
            opArr.push(operators[operators.indexOf(strArr[i])]);           
        }
        else {
            numArr.push(val);
        }         
    }
    total = calc(numArr[0], numArr[1], opArr[0]);
    for (let i = 2, j=1; i < numArr.length; i+=2, j++) {
       total = calc(total, numArr[i], opArr[j])        
    }
    return total;

}

function calc(res, num, operator) {
    let result = 0
    switch(operator) {
        case '+' :
            result = res + num;
            break;
        case '-' :
            result = res - num;
            break;
        case 'x' :
            result = res * num;
            break; 
        case '/' :
            result = res / num;
            break; 
        case '%':
            result = res % num;
            break;   
    }
    return result;
}

// console.log("10 + 13:", calculate1("10 + 13"));
// console.log("14 / 5:", calculate1("14 / 5"));
// console.log("20 % 11:", calculate1("20 % 11"));
console.log("20 + 56 - 7 :", calculate2("20 + 56 - 7"));
