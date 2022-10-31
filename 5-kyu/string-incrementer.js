// String incrementer

// Link: https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString (str) {
  let substr = str.match(/(\D)+/g);
  let num = str.match(/(\d)+/g);
  if (num) {
    num = num[0];
    if (!substr) {
      substr = '';
    } else {
      substr = substr[0]
    }
    let newNum = String(parseInt(num) + 1);
    if (num.length !== newNum.length) {
      const diffN = num.length - newNum.length;
      for (let i = 0; i < diffN; ++i) {
        newNum = '0' + newNum;
      }
    }
    return substr + newNum;
  } else {
    return substr + '1'
  }
}
