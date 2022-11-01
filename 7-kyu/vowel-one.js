// Vowel one

// Link: https://www.codewars.com/kata/580751a40b5a777a200000a1

function vowelOne(s){
  return s.split('').map((v, idx, arr) => /[aeiou]|[AEIOU]/.test(v) ? 1 : 0).reduce((p, c) => String(p) + String(c), '');
}
