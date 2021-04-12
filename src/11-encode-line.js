/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  let res = '';
  const listStr = str.split('');
  let prevChar = '';
  let cnt = 0;
  listStr.forEach((char, index) => {
    if (char === prevChar) {
      cnt++;
    } else if (prevChar === '') {
      cnt = 1;
    } else {
      res += (cnt > 1 ? String(cnt) : '') + prevChar;
      cnt = 1;
    }
    if (index === listStr.length - 1) {
      res += (cnt > 1 ? String(cnt) : '') + char;
    }
    prevChar = char;
  });
  return res;
}

module.exports = encodeLine;
