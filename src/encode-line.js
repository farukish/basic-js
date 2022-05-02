const { NotImplementedError } = require('../extensions/index.js');

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
  let res = "",
    prevSymbol,
    i,
    quantity = 0,
    symbols = str.split("");
  for (i = 0; i < symbols.length; i++) {
    if (prevSymbol && prevSymbol === symbols[i]) {
      quantity++;
    } else {
      if (prevSymbol) res += "" + (quantity > 1 ? quantity : "") + prevSymbol;
      quantity = 1;
    }
    prevSymbol = symbols[i];
  }
  if (prevSymbol) res += "" + (quantity > 1 ? quantity : "") + prevSymbol;
  return res;
}

module.exports = {
  encodeLine
};
