const calculate =
  (...x) =>
  (...y) => {
    return [].concat(x, y).reduce((a, b) => a + b, 0);
  };

// https://www.codewars.com/kata/55c211cce1ef691d9b000061
