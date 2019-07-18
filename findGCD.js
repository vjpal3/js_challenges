//find GCD: recursive solution:
function findGCD(num1, num2) {
    if(num2) {
        return findGCD(num2, num1 % num2);
    }
    else {
		return Math.abs(num1);
    }
}

//Iterative Solution:
function findGCD(num1, num2) {
	num1 = Math.abs(num1);
	num2 = Math.abs(num2);
	if(num1 < num2) {
		[num1, num2] = [num2, num1];
    }
	while (true) {
        if (num2 == 0) return num1;
        num1 %= num2;
        if (num1 == 0) return num2;
        num2 %= num1;
    }
}

//findGCD(20, 30)
//10
//findGCD(18, 48)
//6
