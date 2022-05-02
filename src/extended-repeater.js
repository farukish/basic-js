const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  str = "" + str;
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1,
    separator = options.separator ? "" + options.separator : "+",
    addition = options.hasOwnProperty("addition") ? "" + options.addition : "",
    additionRepeatTimes = options.additionRepeatTimes
      ? options.additionRepeatTimes
      : 1,
    additionSeparator = options.additionSeparator
      ? "" + options.additionSeparator
      : "|",
    additionArr = [],
    strArr = [],
    i;

  for (i = 0; i < additionRepeatTimes; i++) {
    additionArr.push(addition);
  }

  addition = additionArr.join(additionSeparator);

  for (i = 0; i < repeatTimes; i++) {
    strArr.push(str + addition);
  }

  return strArr.join(separator);
}
module.exports = {
  repeater
};
