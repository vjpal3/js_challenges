const array = [1, 1, 1, 3, 3, 2, 2];

// Method 1: Using a Set
const unique = [...new Set(array)];

// Method 2: Array.prototype.reduce
const unique = array.reduce((result, element) => {
  return result.includes(element) ? result : [...result, element];
}, []);

// Method 3: Array.prototype.filter
const unique = array.filter((element, index) => {
  return array.indexOf(element) === index;
});
