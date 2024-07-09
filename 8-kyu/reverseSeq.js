const reverseSeq = (n, result = []) => {
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
