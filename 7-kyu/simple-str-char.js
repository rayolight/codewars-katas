// Simple string characters

// Link: https://www.codewars.com/kata/5a29a0898f27f2d9c9000058

function solve(s){
  let upCounter = 0;
  let lowCounter = 0;
  let numCounter = 0;
  let specialCounter = 0;
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    if (ch.toUpperCase() === ch) {
      upCounter += 1;
    }
    if (ch.toLowerCase() === ch) {
      lowCounter += 1;
    }
    if (Number(ch)) {
      numCounter += 1;
    }
  }
  return [upCounter, lowCounter, numCounter, specialCounter];
}
