const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res;
  let sum = 0;
  let substr;

  res = n.toString();
  //   console.log(res.length);
    for(let i = 0; i < res.length; i++){
      sum = sum + Number(res[i]);
    }

    if(sum.toString().length==2){
      substr = sum.toString();
      sum = Number(substr[0]) + Number (substr[1]);
      }
  return sum;
      // console.log(sum);
      // console.log(typeof sum);
}

module.exports = {
  getSumOfDigits
};
