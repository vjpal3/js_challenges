// The following example uses filter() to create a filtered json of all elements 
// with non-zero, numeric id.

const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];

  let invalidEntries = 0;

  function isNumber(id) {
    return id !== undefined && typeof id === 'number' && !isNaN(id)
  }

  function filterJson(obj) {
    if(isNumber(obj.id) && obj.id !== 0){
        return true;
    }
    invalidEntries++;
    return false;
  }

  console.log("Filtered Array: ", arr.filter(filterJson));
  console.log("Invalid Entries: ", invalidEntries)

 
