//15 mints
function sumAll(arr) {
    let sum = 0;
    if(arr[0] < arr[1]) {
        sum = startSumming(arr[0], arr[1])
    }
    else {
        sum = startSumming(arr[1], arr[0])
    }
    return sum;
  }

  function startSumming(a, b) {
    let sum = 0;
    for(let i=a; i<=b; i++)
        sum += i;
    return sum;
  }

  console.log(sumAll([1, 4]));
  console.log(sumAll([10, 5]));
