/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const del = [];
  const res = arr.filter((item, x) => {
    if (item === -1) {
      del.push(x);
      return false;
    }
    return true;
  });
  res.sort((a, b) => a - b);
  del.forEach((item) => {
    res.splice(item, 0, -1);
  });
  return res;
}

module.exports = sortByHeight;
