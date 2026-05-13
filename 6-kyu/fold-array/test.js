const deepEquals = require('chai').assert.deepEqual;
const { foldArray } = require('./index');

describe('Solution', function () {
  it('basic tests', function () {
    var input = [1, 2, 3, 4, 5];
    var expected = [6, 6, 3];
    deepEquals(foldArray(input, 1), expected);

    expected = [9, 6];
    deepEquals(foldArray(input, 2), expected);

    expected = [15];
    deepEquals(foldArray(input, 3), expected);

    input = [-9, 9, -8, 8, 66, 23];
    expected = [14, 75, 0];
    deepEquals(foldArray(input, 1), expected);
  });
});
