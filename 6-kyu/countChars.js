function count(string) {
  const hash = {};

  for (let char of string) {
    if (char in hash) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  }

  return hash;
}

// https://www.codewars.com/kata/52efefcbcdf57161d4000091
