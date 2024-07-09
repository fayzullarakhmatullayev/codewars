function persistence(num, count = 0) {
  const stringified = num.toString();

  if (stringified.length === 1) {
    return count;
  }

  let sum = stringified[0];

  for (let i = 1; i < stringified.length; i++) {
    sum *= stringified[i];
  }

  return persistence(sum, count + 1);
}

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
