function deepEquals(a, b) {
  // if both are NaN, return true;
  if(Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }

  // if differnt types, return false
  if(typeof a !== typeof b) {
    return false;
  }

  //if they are not objects or either one is null
  if(typeof a !== 'object' || a === null || b === null) {
    return a === b;
  }

  //Ensure a, b have same # of properties
  //if not return false
  if(Object.keys(a).length !== Object.keys(b).length) {
    return false
  }

  //Loop through, ensure all keys and values are identical, if not return false,
  //a & b might have nested objects, so recursion is used.
  for(const key in a) {
    if(!deepEquals(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

// deepEquals(12, 12 => true
// deepEquals(12, 'hi there') => false
// deepEquals('hi there', 'hi there') => true
// deepEquals([1,2,3 ], [1,2,3]) => true
// deepEquals({"name": "Vrishali", "job" : "web developer"}, {"name": "Vrishali", "job" : "web developer"}  => true
// deepEquals({"name": "Vrishali", "job" : "web developer"}, {"name": "Vrishali", "job" : "teacher"} ) => false
