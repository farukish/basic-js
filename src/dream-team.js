const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let i,
    res = "";
  for (i = 0; i < members.length; i++) {
    if (Object.prototype.toString.call(members[i]) == "[object String]") {
      res += members[i].trim().slice(0, 1).toUpperCase();
    }
  }
  return res
    .split("")
    .sort((a, b) => {
      return a > b ? 1 : a === b ? 0 : -1;
    })
    .join("");
}

module.exports = {
  createDreamTeam
};
