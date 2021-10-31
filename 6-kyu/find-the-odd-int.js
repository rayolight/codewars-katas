// Find the odd int

// Link: https://www.codewars.com/kata/54da5a58ea159efa38000836

const findOdd = arr => Array.from(new Set(arr)).find(e => (arr.filter(x => x === e).length % 2) === 1);
