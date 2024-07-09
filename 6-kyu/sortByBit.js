function sortByBit(arr) {
  const countBit = (bit) => bit.toString(2).replace(/[0]/g, '').length;
  return arr.sort((a, b) => (countBit(a) === countBit(b) ? a - b : countBit(a) - countBit(b)));
}

// https://www.codewars.com/kata/59fa8e2646d8433ee200003f
