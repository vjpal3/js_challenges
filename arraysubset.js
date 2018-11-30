function arraySubsetWithMap(superset, subset) {
  if(superset.length < subset.length) {
    return false;
  }
  let superCount = new Map();
  for(let i=0; i<superset.length; i++) {
    let curItem = superset[i];
    if(superCount.has(curItem)) {
      superCount.set(curItem, superCount.get(curItem)+1) ;
    } else {
      superCount.set(curItem, 1);
    }
  }

  for(let i=0; i<subset.length; i++) {
    let curItem = subset[i];
    if(superCount.has(curItem)) {
      superCount.set(curItem, superCount.get(curItem)-1) ;
    }
    else {
      return false;
    }
    if(superCount.get(curItem) === 0) {
      superCount.delete(curItem);
    }
  }
  return true;
}
// Time: O(m + n)
//Space: (m)

//In the above function, a map is used instead of an object.
//A map can have any type keys, such as objects, functions, strings etc.
// An object can have keys of type strings only.
//So if the array inputs contain varied data types, above solution still works.
//The solution below breaks if the arrays have datatypes such as objects, functions etc.
//this is because the keys are converted into strings and may get overwritten for different objects as keys.

function arraySubset(superset, subset) {
  if(superset.length < subset.length) {
    return false;
  }
  let superCount = {};
  for(let i=0; i<superset.length; i++) {
    let curItem = superset[i];
    if(superCount[curItem]) {
      superCount[curItem]++;
    } else {
      superCount[curItem] = 1;
    }
  }

  for(let i=0; i<subset.length; i++) {
    let curItem = subset[i];
    if(superCount[curItem]) {
      superCount[curItem]--;
    } else {
      return false;
    }
    if(superCount[curItem] === 0) {
      delete superCount[curItem];
    }
  }
  return true;
}
// Time: O(m + n)
//Space: (m)

//Another variation:
function arraySubset(superset, subset) { // m, n
  if(superset.length < subset.length) {
    return false;
  }
  let supersetCopy = [...superset] // O(m)

  return subset.every((val) => { //O(n)
    let superIndex = supersetCopy.indexOf(val); //O(m)
    if(superIndex === -1) {
      return false;
    }
    //supersetCopy.splice(superIndex, 1);
    delete supersetCopy[superIndex];
    return true;
  })
}

// Time: O(m * n)
//Space: (m)

// arraySubset([1,2,3,4], [1,2,3]) => true
// arraySubset([1,2,3], [2,1,3]) => true
// arraySubset([1,2,3], [1,2,2,4]) => false
