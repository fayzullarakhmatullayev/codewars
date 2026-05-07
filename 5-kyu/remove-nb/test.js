const { assert } = require('chai');
const { removeNb } = require('./index');

describe('Tests', () => {
  it('test', () => {
    assert.deepEqual(removeNb(26), [
      [15, 21],
      [21, 15]
    ]);
    assert.deepEqual(removeNb(100), []);
  });
});
