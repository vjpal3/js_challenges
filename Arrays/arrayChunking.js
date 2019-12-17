
const chunkArray = (arr, size) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i+=size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

const arr = [0, 1,2,3,4,5]
console.log(chunkArray(arr, 9));

// Linear time complexity because every array item needs to be visited once. 
// Linear space complexity because an internal array of “chunks” is kept 
// which grows proportionally to the input array.