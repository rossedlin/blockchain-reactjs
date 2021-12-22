const SHA256 = require('crypto-js/sha256');

export default class Block {
  constructor(index, current_time, content, prevHash = ' ') {
    this.index        = index;
    this.current_time = current_time;
    this.content      = content;
    this.prevHash     = prevHash;
    this.hash         = this.computeHash();
  }

  computeHash() {
    return SHA256(this.content + this.prevHash + this.current_time + JSON.stringify(this.content)).toString();
  }
}
