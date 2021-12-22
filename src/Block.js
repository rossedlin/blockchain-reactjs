const SHA256 = require('crypto-js/sha256');

module.exports = class Block {
  constructor(index, current_time, content, nextHash = ' ') {
    this.index        = index;
    this.current_time = current_time;
    this.content      = content;
    this.nextHash     = nextHash;
    this.hash         = this.computeHash();
  }

  computeHash() {
    return SHA256(this.content + this.nextHash + this.current_time + JSON.stringify(this.content)).toString();
  }
}
