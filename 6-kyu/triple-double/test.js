const { assert } = require('chai');
const { tripledouble } = require('./index');

describe('tripledouble', () => {
  it('Sample Tests', () => {
    doTest(123123123, 123123, 0);
    doTest(111, 88, 0);
    doTest(111000, 100, 1);
    doTest(111888, 1188, 1);
    doTest(451999277, 41177722899, 1);
    doTest(1222345, 12345, 0);
    doTest(12345, 12345, 0);
    doTest(666789, 12345667, 1);
    doTest(10560002, 100, 1);
    doTest(1112, 122, 0);
  });
  const { assert } = require('chai');

  function doTest(num1, num2, expected) {
    const actual = tripledouble(num1, num2);
    assert.strictEqual(actual, expected, `tripledouble(${num1}, ${num2})\n`);
  }
});
