const { NotImplementedError } = require('../extensions/index.js');

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
  let i,
    j,
    ix,
    jx,
    res = [],
    row,
    num;
  for (i = 0; i < matrix.length; i++) {
    row = [];
    for (j = 0; j < matrix[i].length; j++) {
      num = 0;
      for (ix = -1; ix <= 1; ix++) {
        for (jx = -1; jx <= 1; jx++) {
          if (ix === 0 && jx === 0) continue;
          if (
            matrix.hasOwnProperty(i + ix) &&
            matrix[i].hasOwnProperty(j + jx) &&
            matrix[i + ix][j + jx]
          ) {
            num++;
          }
        }
      }
      row.push(num);
    }
    res.push(row);
  }
  return res;
}

module.exports = {
  minesweeper
};
