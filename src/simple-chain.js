import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  // const chainMaker = {
  chain1: [],

  getLength() {
    return this.chain1.length;
  },

  addLink(value) {
    this.chain1.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (this._checkIntegerNumber(position)) {
      if (position < 1 || position > this.getLength()) {
        this._deleteChain();
        throw new Error("You can't remove incorrect link!");
      }
      const index = position - 1;
      this.chain1.splice(index, 1);
      return this;
    }
    this._deleteChain();
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.chain1.reverse();
    return this;
  },
  finishChain() {
    const chain = this._getChain();
    this._deleteChain();
    return chain;
  },
  _deleteChain() {
    this.chain1.length = 0;
  },
  _checkIntegerNumber(num) {
    return typeof num === "number" && (num ^ 0) === num;
  },
  _getChain() {
    return this.chain1.join("~~");
  },

  // }
};
