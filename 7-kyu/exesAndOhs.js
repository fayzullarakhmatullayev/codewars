function XO(str) {
  let count = { x: 0, o: 0 };

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      count.x += 1;
    }

    if (str[i].toLowerCase() === 'o') {
      count.o += 1;
    }
  }

  return count.x === count.o;
}

// https://www.codewars.com/kata/55908aad6620c066bc00002a
