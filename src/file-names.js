const { NotImplementedError } = require('../extensions/index.js');

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
  let i,
    count = {},
    res = [],
    newName,
    regexp = /^.*\(\d+\)$/g;
  for (i = 0; i < names.length; i++) {
    if (count.hasOwnProperty(names[i])) {
      count[names[i]]++;
      res.push(names[i] + "(" + count[names[i]] + ")");
    } else {
      count[names[i]] = 0;
      newName =
        regexp.test(names[i]) && res.indexOf(names[i]) >= 0
          ? names[i] + "(1)"
          : names[i];
      res.push(newName);
    }
  }
  return res;
}

module.exports = {
  renameFiles
};
