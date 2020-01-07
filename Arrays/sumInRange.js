// Find the sum of the elements in nums from the indices
// at queries[i][0] to queries[i][1] (inclusive) for each query,
// then add all of the sums for all the queries together.
// Return that number modulo (Math.pow(10, 9)) + 7)
// For nums = [3, 0, -2, 6, -3, 2] and queries = [[0, 2], [2, 5], [0, 5]],
// the output should be
// sumInRange(nums, queries) = 10.
//The array of results for queries is [1, 3, 6], so the answer is 1 + 3 + 6 = 10.

function sumInRange(nums, queries) {
  let results = [];
  queries.forEach(query => {
    results.push(
      nums.slice(query[0], query[1] + 1).reduce((sum, num) => (sum += num))
    );
  });

  console.log(results);
  let modVal = Math.pow(10, 9) + 7;

  let total = results.reduce((sum, num) => (sum += num));

  if (results >= 0) return total % modVal;
  else return ((total % modVal) + modVal) % modVal;
}
