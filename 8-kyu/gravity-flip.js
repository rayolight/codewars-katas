// Gravity Flip

// Link: https://www.codewars.com/kata/5f70c883e10f9e0001c89673

const flip = (d, a) => {
  let compare;
  if (d == 'R') {
    compare = (a, b) => (a < b) ? ((a > b) ? 1 : 0) : 0;
  } else {
    compare = (a, b) => (a > b) ? ((a < b) ? 1 : 0) : 0;
  }
  return a.sort(compare);
}
