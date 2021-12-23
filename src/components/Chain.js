import Block from './Block';

export default class Chain {
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
    newBlock.prevHash = this.latestBlock().hash;
    newBlock.hash     = newBlock.computeHash();
    this.chain.push(newBlock);
  }

  updateBlock(block) {
    for (let i = 0; i < this.chain.length; i++) {
      if (this.chain[i].index === block.index) {
        this.chain[i] = block;
      }
    }

    this.computeHashes();
  }

  computeHashes() {
    for (let i = 0; i < this.chain.length; i++) {
      this.chain[i].hash     = this.chain[i].computeHash();

      if (this.chain[i+1] !== undefined) {
        this.chain[i+1].prevHash = this.chain[i].hash;
      }
    }
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
      if (currentBlock.prevHash !== nextBlock.hash) {
        return false;
      }

      return true;
    }
  }
};
