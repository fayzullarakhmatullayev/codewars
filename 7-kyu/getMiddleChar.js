function getMiddle(s) {
  const isOdd = s.length % 2 === 1;
  const midIndex = Math.floor(s.length / 2);
  return isOdd ? s[midIndex] : s[midIndex - 1] + s[midIndex];
}

// https://www.codewars.com/kata/56747fd5cb988479af000028
