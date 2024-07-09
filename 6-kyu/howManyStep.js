function howManyStep(a, b) {
  let steps = 0;
  while (a < b) {
    if (b % 2 === 0 && b / 2 >= a) {
      b = b / 2;
    } else {
      b = b - 1;
    }
    steps++;
  }
  return steps;
}

// https://www.codewars.com/kata/57a42ef9e298a72d710002aa
