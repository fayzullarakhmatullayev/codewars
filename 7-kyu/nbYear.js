function nbYear(p0, percent, aug, p) {
  let count;
  for (count = 0; p0 < p; count++) {
    p0 += ((p0 * percent) / 100 + aug) | 0;
  }

  return count;
}

// https://www.codewars.com/kata/563b662a59afc2b5120000c6
