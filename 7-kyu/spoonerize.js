function spoonerize(words) {
  const [first, last] = words.split(' ');

  return `${last[0] + first.slice(1)} ${first[0] + last.slice(1)}`;
}

// https://www.codewars.com/kata/56b8903933dbe5831e000c76
