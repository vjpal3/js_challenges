function findFirstObjectIndex(array, key, value) {   
    for(let i=0; i<array.length; i++) {
        if(array[i][key] === value) {
            return i;
        }
    }   
}
// console.log("Index of first object found:", findFirstObjectIndex([{name: 'Cliff', age: 32}, {name: 'John', age: 25}, {name: 'Sam', age: 40}], 'age', 32));

function findAllObjectsIndices(array, key, value) { 
    let output = []; 
    for(let i=0; i<array.length; i++) {
        if(array[i][key] === value) {
            output.push(i);
        }

    }
    console.log(output);
} 

// findAllObjectsIndices([{name: 'Cliff', age: 32}, {name: 'John', age: 25}, {name: 'Sam', age: 40}, {name: 'sally', age: 25}], 'age',25);


