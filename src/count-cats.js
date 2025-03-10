import { NotImplementedError } from "../extensions/index.js";

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
export default function countCats(matrix) {
  let count = 0;
  // let arr = Array.from(Array);
  // if (Array.length === 0) {
  // return 0;
  // }

  for (let i = 0; i < matrix.length; i++) {
    // if (Array.isArray(Array[i])) {
    // if (Array[i] === 0 || Array[i] === undefined) {
    // break;
    // }
    for (let j = 0; j < matrix[i].length; j++) {
      // if (Array[i][j] === 0 || Array[i][j] === undefined) {
      // count = count;
      // }
      if (matrix[i][j] === "^^") {
        count += 1;
      }
      // }
    }
  }
  return count;
}
