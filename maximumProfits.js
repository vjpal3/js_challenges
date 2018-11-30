function maximumProfits(prices){
  let minPrice = Infinity;
  let maxProfit = 0;
  for(let i=0; i<prices.length; i++) {
    let currentPrice = prices[i];
    minPrice = Math.min(minPrice, currentPrice);
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
  }
  return maxProfit;
}
//Time: O(n)
//space: O(1)
// maximumProfits([10, 7,5,4,3,2])   => 0
// maximumProfits([10, 7,5,8,1,9])   => 8
// maximumProfits([10, 7,5,8,11,19]) => 14
// maximumProfits([10, 7,5,8,11,9]) => 6

function maximumProfits_bruteforce(arr){
  let maxProfit = 0;
  for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if(arr[i] < arr[j]) {
        let profit = arr[j] - arr[i];
        maxProfit = profit > maxProfit ? profit : maxProfit;
      }
    }
  }
  return maxProfit;
}
