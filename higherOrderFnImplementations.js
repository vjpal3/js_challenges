function filter(arr, fn) {
    const newArr = [];
    arr.forEach(function(val) {
		if(fn(val))
       		newArr.push(val);
    });
	return newArr;
}

function isEven(val) {
    return val % 2 === 0;
}

function map(arr, fn) {
    const newArr = [];
    arr.forEach(function(val) {
        newArr.push(fn(val));
    });
    return newArr;
}

function triple(val) {
    return val * 3;
}

function some(arr, fn) {
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i]))
            return true;
    }
    return false;
}

function isPositive(val) {
    return val > 0;
}

function every(arr, fn) {
    for(let i = 0; i < arr.length; i++) {
        if(!fn(arr[i]))
            return false;
    }
    return true;
}

function reduce(arr, fn){
    let sum = 0;
    arr.forEach(function(val) {
        sum = fn(sum, val);
    })
    return sum;
}

function add(sum, val){
    return sum + val;
}

const arr = [0, 1, 2, 3, 4];
console.log("arr: " + arr);
console.log("Result of filter(): " + filter(arr, isEven));
console.log("Result of map(): " + map(arr, triple));
console.log("Result of some(): " + some(arr, isPositive));
console.log("Result of every(): " + every(arr, isEven));
const arr1 = [2, 6, 8, 4];
console.log("Result of every(): " + every(arr1, isEven));
console.log("Result of reduce(): " + reduce(arr1, add))