function findShort(s) {
  const words = s.split(' ');
  const arr = [];
  words.map((w) => {
    arr.push(w.length);
  });
  const min = Math.min(...arr);
  return min;
}

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
