var countBits = function (n) {
  let sum = 0;
  const binary = n.toString(2);

  for (let i = 0; i < binary.length; i++) {
    sum += +binary[i];
  }

  return sum;
};

// https://www.codewars.com/kata/526571aae218b8ee490006f4
