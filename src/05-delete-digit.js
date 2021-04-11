/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let x = 0;
  let maxDig = 0;
  const digList = String(n).split('');
  let cash = digList;
  for (let index = 0; index < digList.length; index++) {
    cash = String(n).split('');
    cash.splice(index, 1);
    const curMaxdig = Number(cash.join(''));
    if (curMaxdig > maxDig) {
      maxDig = curMaxdig;
      x = index;
    } else if (index === 0) {
      maxDig = curMaxdig;
    }
  }
  digList.splice(x, 1);
  return Number(digList.join(''));
}

module.exports = deleteDigit;
