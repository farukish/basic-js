const { NotImplementedError } = require('../extensions/index.js');

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
  let min1indices = [],
    i;
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == -1) {
      min1indices.unshift(i);
      arr.splice(i, 1);
      i++;
    }
  }
  arr = arr.sort((a, b) => {
    return a > b ? 1 : a == b ? 0 : -1;
  });
  for (i = 0; i < min1indices.length; i++) {
    arr.splice(min1indices[i], 0, -1);
  }
  return arr;
}


module.exports = {
  sortByHeight
};
