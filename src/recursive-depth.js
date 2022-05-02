const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr) && arr.length == 0) return 1;
    let i,
      depths = [];
    for (i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        depths.push(this.calculateDepth(arr[i]) + 1);
      } else {
        depths.push(1);
      }
    }
    return Math.max.apply(null, depths);
  }
}

module.exports = {
  DepthCalculator
};
