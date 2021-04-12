/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let res = 0;
  function recur(start, finish) {
    const halfIndex = Math.floor((start + finish) / 2);
    res = halfIndex;
    if (array[halfIndex] !== value) {
      if (array[halfIndex] > value) {
        recur(start, halfIndex);
      } else {
        recur(halfIndex, finish);
      }
    }
    return false;
  }
  recur(0, array.length);
  return res;
}

module.exports = findIndex;
