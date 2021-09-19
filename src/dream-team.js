import { NotImplementedError } from "../extensions/index.js";

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
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arrFiltered = [];
  function filter(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        arrFiltered.unshift(arr[i]);
      }
    }
  }
  filter(members);
  // let str1 = (members, (item) => typeof item === "string");

  let str2 = arrFiltered.map((item) => item.trim().slice(0, 1).toUpperCase());
  let str3 = str2.sort().join("");

  return str3;
}
