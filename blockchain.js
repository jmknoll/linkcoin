const Block = require('./block');

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data) {
   const block = Block.mineBlock(this.chain[this.chain.length - 1], data);
   this.chain.push(block);

   return block; 
  }

  isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) { 
      return false 
    }

    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const lastBlock = chain[i-1];
      // first condition check the validity of the chain
      // second condition checks the validity of the block
      // if either has been tampered with, the whole condition will evaluate to true and return false for the function
      // true || false == true
      if (block.lastHash !== lastBlock.hash || 
        block.hash !== Block.blockHash(block)) {
        return false;
      }
    }
    return true
  }

  replaceChain(newChain) {
    // start by checking length
    if (newChain.length <= this.chain.length) {
      console.log('new chain is not longer than current chain');
      return;
    } else if (!this.isValidChain(newChain)) {
      console.log('new chain is not valid');
      return;
    } else {
      console.log('replacing blockchain with new chain');
      this.chain = newChain;
    }
  }
}

module.exports = Blockchain;