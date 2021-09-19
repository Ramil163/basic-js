import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (date === null || date === undefined) {
    return "Unable to determine the time of year!";
  } else if (typeof date.getMonth != "function" || date.length === 0) {
    throw new Error("Invalid date!");
  } else if (
    !date ||
    !(date instanceof Date) ||
    date.toString !== new Date().toString
  ) {
    throw new Error("Invalid date!");
  }

  let date1 = new Date(date);

  let result;
  if (
    date1.getMonth() === 11 ||
    date1.getMonth() === 0 ||
    date1.getMonth() === 1
  ) {
    // return "winter";
    result = "winter";
  } else if (
    date1.getMonth() === 2 ||
    date1.getMonth() === 3 ||
    date1.getMonth() === 4
  ) {
    // return "spring";
    result = "spring";
  } else if (
    date1.getMonth() === 5 ||
    date1.getMonth() === 6 ||
    date1.getMonth() === 7
  ) {
    // return "summer";
    result = "summer";
  } else if (
    date1.getMonth() === 8 ||
    date1.getMonth() === 9 ||
    date1.getMonth() === 10
  ) {
    // return "autumn";
    result = "autumn";
  }
  // return result;
  // if (typeof date === "undefined") {
  //   return "Unable to determine the time of year!";
  // }
  // else if (date1.getMonth() < 0 || date1.getMonth() > 11) {
  //   throw new Error("Invalid date!");
  // }
  // else if (Object.prototype.toString.call(date) !== "[object Date]") {
  //   throw new Error("Invalid date!");
  // }

  // try {
  //   Object.prototype.toString.call(date);
  //   let a = dategetMonth(date1);
  // } catch (err) {
  //   throw new Error("Invalid date!");
  // }

  return result;
}
