// shorter concat [reverse longer]

// Link: https://www.codewars.com/kata/54557d61126a00423b000a45

function shorter_reverse_longer(a,b){
  return a.length < b.length ? a + b.split('').reduce((p, c) => c + p) + a : b + a.split('').reduce((p, c) => c + p, '') + b
}
