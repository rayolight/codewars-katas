// Grasshopper - Summation

// Link: https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = function (num) {
  temp = 0;
  sum = 0;
  for (let i = 0; i < num; ++i) {
    temp += 1;
    sum += temp;
  }
  return sum
}