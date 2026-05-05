const { assert } = require('chai');
const { chooseBestSum } = require('./index');

describe('chooseBestSum', function () {
  it('Basic tests ', function () {
    var ts = [50, 55, 56, 57, 58];
    assert.strictEqual(chooseBestSum(163, 3, ts), 163);
    ts = [50];
    assert.strictEqual(chooseBestSum(163, 3, ts), null);
    ts = [91, 74, 73, 85, 73, 81, 87];
    assert.strictEqual(chooseBestSum(230, 3, ts), 228);
  });
});
