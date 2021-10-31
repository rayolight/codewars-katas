// Split Strings

// Link: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

const solution = (str) => str.length > 0 && str.match(/\w\w+?|\w/g).map(s => s.length < 2 ? `${s}_` : s);
