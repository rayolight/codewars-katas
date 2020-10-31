// Sum of positive

// Link: https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  return arr.reduce((sum, num) => (num > -1) ? sum + num : sum, 0);
}
