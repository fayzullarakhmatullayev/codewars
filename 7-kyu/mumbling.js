function accum(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result +=
      str[i].toUpperCase() +
      Array(i + 2)
        .fill(str[i].toLowerCase())
        .slice(1, -1)
        .join('') +
      '-';
  }

  return result.slice(0, result.length - 1);
}

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
