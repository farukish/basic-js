const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  let i,
    res = arr.slice();
  for (i = 0; i < res.length; i++) {
    if (res[i] === "--double-next") {
      if (i == res.length - 1) {
        res.pop();
        break;
      } else {
        res[i] = res[i + 1];
      }
    } else if (res[i] === "--double-prev") {
      if (i == 0) {
        res.splice(0, 1);
        i--;
      } else if (res[i - 1] == "--discard-next") {
        res.splice(i, 1);
      } else {
        res[i] = res[i - 1];
      }
    } else if (res[i] === "--discard-next") {
      res.splice(i + 1, 1);
    } else if (res[i] === "--discard-prev") {
      if (i == 0) {
        res.splice(0, 1);
        i--;
      } else if (res[i - 1] != "--discard-next") {
        res.splice(i - 1, 1);
        i--;
      }
    }
  }

  for (i = res.length - 1; i >= 0; i--) {
    if (res[i] == "--discard-prev" || res[i] == "--discard-next") {
      res.splice(i, 1);
    }
  }

  return res;
}

module.exports = {
  transform
};
