function isDivisible(firstElement, ...rest) {
  return rest.every((ele) => firstElement % ele === 0);
}

// https://www.codewars.com/kata/558ee8415872565824000007
