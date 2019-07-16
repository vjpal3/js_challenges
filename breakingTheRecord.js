'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
  let max_score = scores[0];
  let min_score = scores[0];
  let min = 0;
  let max = 0;
  let result = [2];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max_score) {
      max_score = scores[i];
      max++;
    } else if (scores[i] < min_score) {
      min_score = scores[i];
      min++;
    }
  }
  result[0] = max;
  result[1] = min;
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const scores = readLine()
    .split(' ')
    .map(scoresTemp => parseInt(scoresTemp, 10));

  const result = breakingRecords(scores);

  ws.write(result.join(' ') + '\n');

  ws.end();
}
