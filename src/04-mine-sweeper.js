/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let n = 0;
  const res = [];
  matrix.forEach((row, x) => {
    const newRow = [];
    row.forEach((cell, z) => {
      const prevRow = matrix[x - 1] || [];
      const nextRow = matrix[x + 1] || [];
      n = (prevRow[z - 1] || 0)
        + (prevRow[z] || 0)
        + (prevRow[z + 1] || 0)
        + (row[z - 1] || 0)
        // cell +
        + (row[z + 1] || 0)
        + (nextRow[z - 1] || 0)
        + (nextRow[z] || 0)
        + (nextRow[z + 1] || 0);
      // row.splice(z, 1, n);
      newRow.push(n);
    });
    res.push(newRow);
  });
  return res;
}

module.exports = minesweeper;
