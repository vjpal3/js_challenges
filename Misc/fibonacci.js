const fib = (n) => {
    if(n <= 1)
        return n;

    return fib(n-1) + fib(n-2);
}

console.log(fib(5));

const fibIterative = (n) => {
    const series = [1, 1];
    for(let i = 2; i < n; i++) {
        series.push(series[i-2] + series[i-1]);
    }
    return series[n - 1];
}
console.log(fibIterative(2));

