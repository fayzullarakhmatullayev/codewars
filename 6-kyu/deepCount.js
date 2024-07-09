function deepCount(arr) {
  return arr.reduce((acc, val) => {
    return acc + (Array.isArray(val) ? deepCount(val) : 0);
  }, arr.length);
}

// https://www.codewars.com/kata/596f72bbe7cd7296d1000029
