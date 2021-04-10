/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const s1List = s1.split('');
  const s2List = s2.split('');
  for (let z = 0; z <= s1List.length; z++) {
    const char = s1List[z];
    if (s2List.length === 0) {
      return res;
    }
    const finded = s2List.findIndex((ch) => ch === char);
    if (finded !== -1) {
      s2List.splice(finded, 1);
      res++;
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
