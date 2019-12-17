const reverseInPlace = arr => {
    for(let i = 0; i < arr.length; i++) {
        arr.splice(i, 0, arr.pop());
    }
}
// const arr = [1, 2, 3, 4, 5];
// console.log("Array before reversing: ", arr);
// reverseInPlace(arr);
// console.log("Array after reversing: ", arr);

const _reverseArray = array => {
	for (let i = 0; i < array.length / 2; i++) {
		[array[i], array[array.length - 1 - i]] = [
			array[array.length - 1 - i],
			array[i]
		];
	}
	return array;
};

const arr = [6, 2, 3, 4, 5];
console.log("Array before reversing: ", arr);
_reverseArray(arr);
console.log("Array after reversing: ", arr);