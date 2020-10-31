// Easy Balance Checking

// Link: https://www.codewars.com/kata/59d727d40e8c9dd2dd00009f

function balance(book) {
  let results = book.split('\n').filter(result => result !== '');
  let balance = 0;
  let expense = 0;
  let resultString = results.map((result, index) => {
    const cleanResult = result.replace(/(?!\.|\ )(\W)/g, '');
    const rowValues = cleanResult.split(' ');
    if (index === 0) {
      if (rowValues.length < 2) {
        rowValues.unshift('Original Balance:');
      }
      balance = Number(rowValues[1]);
      rowValues[1] = Number(rowValues[1]).toFixed(2).toString();
    } else {
      balance -= Number(rowValues[2]);
      expense += Number(rowValues[2]);
      rowValues[2] = Number(rowValues[2]).toFixed(2).toString();
      rowValues.push(`Balance ${balance.toFixed(2)}`)
    }
    return rowValues.join(' ');
  }).reduce((totalString, currentString) => `${totalString}${currentString}\r\n`, '');
  return resultString.concat(`Total expense  ${expense.toFixed(2)}\r\n` +
    `Average expense  ${(expense / (results.length - 1)).toFixed(2)}`);
}
