// Math Issues

// Link: https://www.codewars.com/kata/5267faf57526ea542e0007fb

Math.round = function(number) {
  const strings = String(number).match(/\d+/g);
  return strings.length > 1 ? ((parseInt(strings[1][0]) >= 5) ? parseInt(strings[0]) + 1 : parseInt(strings[0])) : parseInt(strings[0]);
};

Math.ceil = function(number) {
  const strings = String(number).match(/\d+/g);
  return strings.length > 1 ? ((parseInt(strings[1]) > 0) ? parseInt(strings[0]) + 1 : parseInt(strings[0])) : parseInt(strings[0]);
};

Math.floor = function(number) {
  const strings = String(number).match(/\d+/g);
  return parseInt(strings[0]);
};
