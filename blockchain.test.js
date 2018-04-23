const Block = require('./block');
const Blockchain = require('./blockchain')

describe('Blockchain', () => {
  let bc;

  beforeEach( () => {
    bc = new Blockchain();
  });

  it('starts with the genesis block', () => {
    expect(bc.chain[0] === Block.genesis());
  });

  it('adds a new block', () => {
    const data = 'foo';
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length - 1].data === data);
  });
});