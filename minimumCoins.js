function findMinimumCoins(change_owed) {
    let cents = change_owed * 100;
    let coins = [ 25, 10, 5, 1 ];
    
    let minimum_coins = 0;
    for (let i = 0; i < 4; i++) 
    {
        if (cents == coins[i]) 
        {
            minimum_coins += 1 ;
            break;
        }
        else if (cents > coins[i])
        {
            let division = Math.trunc(cents / coins[i]);
            minimum_coins += (division) > 0 ? division : 0;
            cents = cents % coins[i];
        }
    }   
    console.log("Minimum coins required for the change of " + change_owed + ": " + minimum_coins);
}

findMinimumCoins(0.91);
