const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create result array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} result array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = [];
      if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
      }
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-next") {
          i++;
          if (arr[i + 1] === "--double-prev" || arr[i + 1] === "--discard-prev") {
          i++;
          }
        } else if (
          arr[i] === "--discard-prev" &&  i > 0 && arr[i - 2] !== "--discard-next"
        ) {
          result.pop();
        } else if (arr[i] === "--double-next" && i < arr.length - 1) {
          result.push(arr[i + 1]);
        } else if (
          arr[i] === "--double-prev" && i > 0 && arr[i - 2] !== "--discard-next"
        ) {
          result.push(arr[i - 1]);
        } else if (
          arr[i] !== "--discard-next" && arr[i] !== "--discard-prev" && arr[i] !== "--double-next" && arr[i] !== "--double-prev"
        ) {
          result.push(arr[i]);
        }
      }
      return result;
    }

    let arrayTransform = transform([1, 2, 3, '--double-next', 4, 5]);
    // console.log(arrayTransform);

module.exports = {
  transform
};
