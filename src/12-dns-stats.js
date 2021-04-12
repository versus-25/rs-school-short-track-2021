/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  domains.forEach((x) => {
    const arrDom = x.split('.');
    let curDom = '';
    arrDom.reverse().forEach((item, index) => {
      curDom += `.${item}`;
      if (!res[curDom]) {
        res[curDom] = 1;
      } else {
        res[curDom]++;
      }
      if (index === arrDom.length - 1) curDom = '';
    });
  });
  return res;
}

module.exports = getDNSStats;
