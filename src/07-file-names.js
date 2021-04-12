/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = [];
  const reg = /\([\d]{1,}\)$/;
  names.forEach((item) => {
    let nameFile = '';
    if (res.includes(item)) {
      if (reg.test(item)) {
        const suffix = item.match(reg)[0];
        nameFile = item + suffix;
      } else {
        const prevNames = res.filter((x) => item === x.slice(0, x.length - 3));
        if (prevNames.length !== 0) {
          const prevMaxname = [...prevNames].sort((a, b) => {
            const getIndex = (x) => x.match(reg)[0].match(/[\d]{1,}/)[0];
            return getIndex(b) - getIndex(a);
          })[0];
          nameFile = `${item}(${String(
            +prevMaxname.match(/[\d]{1,}/)[0] + 1,
          )})`;
        } else {
          nameFile = `${item}(1)`;
        }
      }
    } else {
      nameFile = item;
    }
    res.push(nameFile);
  });
  return res;
}

module.exports = renameFiles;
