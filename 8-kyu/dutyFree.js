function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / percentage(normPrice, discount));
}

function percentage(num, per) {
  return (num / 100) * per;
}

// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5
