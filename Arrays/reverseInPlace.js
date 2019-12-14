const reverseInPlace = arr => {
    for(let i = 0; i < arr.length; i++) {
        arr.splice(i, 0, arr.pop());
    }
}
const arr = [1, 2, 3, 4, 5];
console.log("Array before reversing: ", arr);
reverseInPlace(arr);
console.log("Array after reversing: ", arr);