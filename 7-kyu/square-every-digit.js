// Square Every Digit

// Link: https://www.codewars.com/kata/546e2562b03326a88e000020

// function squareDigits(num){
//   return 0;
// }

const squareDigits = num => parseInt(String(num).split('').reduce((v, c) => `${v}${String(Math.pow(parseInt(c), 2))}`, ''));
