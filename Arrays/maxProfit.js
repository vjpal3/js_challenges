const maxProfit = (prices) => {
    let max = 0;
    let result = 0;
    let minBuyPrice = 0;
    let maxSellPrice = 0;

    for (let i = prices.length-1; i >= 0; i--) {
        if (prices[i] > max) {
           max = prices[i];
        } 
        let tempResult = max - prices[i];
        if(tempResult > result) {
            result = tempResult;
            maxSellPrice = max;
            minBuyPrice = prices[i];
        }
    }
    return [minBuyPrice, maxSellPrice];
}

console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([2, 1, 5, 3, 4]));
console.log(maxProfit([2, 10, 1, 3]));
console.log(maxProfit([2, 1, 2, 11]));
console.log(maxProfit([2, 3, 1, 5, 4]));
console.log(maxProfit([1, 2, 5, 3, 4]));
console.log(maxProfit([2, 10, 5, 1, 3]));
