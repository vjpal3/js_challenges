function highestFrequency(arr) {
  const frequencies = {};
  let maxFrequency = 0;
  let mostFrequentString = arr[0];

  for(let i=0; i<arr.length; i++) {
    if(frequencies[arr[i]]) {
      frequencies[arr[i]] += 1;
    } else {
      frequencies[arr[i]] = 1;
    }

    if(frequencies[arr[i]] > maxFrequency) {
      maxFrequency = frequencies[arr[i]];
      mostFrequentString = arr[i]
    }
  }
  return mostFrequentString;
}

highestFrequency(['a', 'b', 'c', 'ea'])
=> 'a'

highestFrequency(['a', 'c', 'c', 'b'])
=> 'c'

highestFrequency(['d', 'b', 'c', 'a'])
=> 'd'

//time-complexity O(n)
//space-complexity O(n)
