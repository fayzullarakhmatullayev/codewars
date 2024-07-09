function digPow(n, p) {
  const digits = n.toString();
  let sum = 0;

  for (let i = 0; i < digits.length; i++, p++) {
    sum += Math.pow(digits[i], p);
  }

  const dividedResult = sum / n;

  return dividedResult % 1 === 0 ? dividedResult : -1;
}

// https://www.codewars.com/kata/5552101f47fc5178b1000050
