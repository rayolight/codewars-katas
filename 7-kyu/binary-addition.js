// Binary Addition

// Link: https://www.codewars.com/kata/551f37452ff852b7bd000139

const addBinary = (a, b) => {
  let num = a + b;
  let binaryNum = '';
  while (num >= 1) {
    binaryNum = String(num % 2) + binaryNum;
    num = Math.floor(num / 2);
  }
  return binaryNum;
}
