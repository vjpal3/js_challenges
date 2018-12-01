function rotate90(matrix) {
  const rotated = [];
  for(let j=0; j<matrix[0].length; j++) {
    const row = [];
    for(let i=matrix[0].length-1; i>=0; i--){
      row.push(matrix[i][j])
    }
    rotated.push(row)
  }
  return rotated;
}

function rotate180(matrix) {
  return rotate90(rotate90(matrix));
}

function rotate270(matrix) {
  return rotate90(rotate180(matrix));
}

// Time: O(n)
// Space: O(n)

// rotate90([[1,2,3], [4,5,6], [7,8,9]]) => [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
// rotate180([[1,2,3], [4,5,6], [7,8,9]]) => [ [ 9, 8, 7 ], [ 6, 5, 4 ], [ 3, 2, 1 ] ]
// rotate270([[1,2,3], [4,5,6], [7,8,9]]) => [ [ 3, 6, 9 ], [ 2, 5, 8 ], [ 1, 4, 7 ] ]
