const Block = require('./block');

describe('Block', () => {
  let data, block, lastBlock;

  beforeEach(() => {
    data = 'bar';
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });

  it('sets the `data` to match the input', () => {
    console.log(block)
    expect(block.data).toEqual(data);
  });

  it('sets the `lastHash` to match the hash of the last block', () => {
    expect(block.lastHash).toEqual(lastBlock.hash);
  });
});