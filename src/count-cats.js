const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
let matrix = [
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2],
  ['^^', 1, '^^']
];
function countCats(matrix) {
  let cats = []; //пустой массив для ловки кошечек
  for( let i = 0; i < matrix.length; i++ ){
      for( let j = 0; j < matrix[i].length; j++){
          // console.log( `item {${i},${j}} - ${matrix[i][j]}`);
          if (matrix [i][j] === '^^' ){
              cats.push(j);
          }
      }
  }
  return cats.length; //Количество кошечек
  // console.log(cats);
  // console.log(cats.length);

}

module.exports = {
  countCats
};
