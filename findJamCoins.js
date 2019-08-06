Psudocode for finding jamcoins - Google codejam 2016

coin = 10 ** (n-1) + 1   // 100001  for n= 6
coinCount = j; // 3
jamCoins = new Array(coinCount); //multidimensional array
    // [ 
   //    [100011 5 13 147 31 43 1121 73 77 629], 
   //    [111111 21 26 105 1302 217 1032 513 13286 10101],
   //    [111001 3 88 5 1938 7 208 3 20 11] 
   //  ]

while coinCount >= 0   
    digit1Count = count number of 1's in the coin.
    // if didgit1Count - Even, then for a jamcoin the numbers represented in the bases 2 thru 10, 
    //                  have a pattern of Odd & Even. 
    // Else - all numbers are odd. 
    // So we can check isPrime(only odd numbers)
   //  [9, 28, 65, 126, 217, 344, 513, 730, and 1001]
    
    baseNumbers = arr[9] // the array of numbers representing a jamcoin in the bases 2 thru 10
            
    for i 2 to 10      
        baseNumbers.push parseInt(coin, i) // Fill the array with appropriate numbers
                                          //  [9, 28, 65, 126, 217, 344, 513, 730, and 1001]

    while i <= baseNumbers.length-1  
        divisors = new Array(9)  // array of numbers which are even divisors of the numbers in baseNumbers
                                // [ 5 13 147 31 43 1121 73 77 629 ]
        if isPrime(baseNumbers[i]) 
            break    //not a jamcoin. so discard this coin and start with the outer while loop, taking the next coin
        else 
            calculate even-divisor of baseNumbers[i]
            divisors.push(even-divisor)

        if digit1Count even
            i += 2;
        else
            i++;

    divisors.unshift(coin) // the coin is valid, so push the coin itself in the divisors array at 0th pos
                //[100011 5 13 147 31 43 1121 73 77 629]

    jamCoins.push(divisors) 
    coinCount--

    binary addition coin += 2

print jamcoins
            