// This function doesn't take into account the Math operators precedence. 
// It evaluates the expression left to right.
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
    total = compute(numArr[0], numArr[1], opArr[0]);
    for (let i = 2, j=1; i < numArr.length; i+=1, j++) {
       total = compute(total, numArr[i], opArr[j])        
    }
    return total.toFixed(2);
}

function compute(res, num, operator) {
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

console.log("20 x 56 - 7 / 13 % 2 =", calculate2("20 x 56 - 7 / 13 % 2"));
