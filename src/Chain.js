const Block  = require('./Block');

module.exports = class Chain {
  constructor() {
    this.chain = [this.initGenesisBlock()];
  }

  initGenesisBlock() {
    return new Block(0, Date.now(), 'Initial Block in the Chain', '0');
  }

  latestBlock() {
    return this.chain[this.chain.length - 1];
  }

  allBlocks() {
    return this.chain;
  }

  addNewBlock(newBlock) {
    newBlock.nextHash = this.latestBlock().hash;
    newBlock.hash     = newBlock.computeHash();
    this.chain.push(newBlock);
  }

  checkValidity() {
    // Checking validity
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const nextBlock    = this.chain[i - 1];

      // Checking current block hash
      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }

      // Comparing current block hash with the next block
      if (currentBlock.nextHash !== nextBlock.hash) {
        return false;
      }

      return true;
    }
  }
};
