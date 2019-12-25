const twoSum2 = (arr, sum) => {
    const pairs = [];
    const store = [];

    for (let num of arr) {
        let needed = sum - num;

        if(store.indexOf(needed) !== -1) {
            pairs.push([num, needed]);
        }
        store.push(num);
    }
    console.log(pairs);
}

const twoSum = (arr, sum) => {
    const diff = [];
    for (let num of arr) {
        diff.push(Math.abs(num - sum));
    }
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (diff.indexOf(arr[i]) !== -1) {
            let desiredIndex = diff.indexOf(arr[i]);
            output.push([arr[i], arr[desiredIndex]]);
            arr.splice(desiredIndex, 1);
        }
    }
    console.log(output);
}

twoSum2([1, 2, 2, 3, 4], 4);

