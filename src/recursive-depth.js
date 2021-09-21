import { NotImplementedError } from "../extensions/index.js";

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
const hasNestedArray = (arr) => arr.some((item) => Array.isArray(item));
export default class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    if (hasNestedArray(arr)) {
      const arr1 = arr.reduce((acc, cur) => acc.concat(cur), []);
      return counter + this.calculateDepth(arr1);
    }
    return counter;
  }
}
