const steps = (n) => {
    for (let i = 0; i < n; i++) {
        let stair = '';
        for (let j = 0; j < n; j++) {
            if (j <= i)
                stair += '#';
            else
                stair += ' ';        
        }
        console.log(stair);
    }
}

// steps(5);

const stepsRecursion = (n, row=0, stair='') => {
    if (n === row)
        return;
    
    if(stair.length <= row)
        stair += '#';
    else
        stair += ' '

    if (stair.length === n) {
        console.log(stair);
        return stepsRecursion(n, row+1);
    }
    stepsRecursion(n, row, stair);
        
}

stepsRecursion(5);

