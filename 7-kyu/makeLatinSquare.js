function makeLatinSquare(n) {
  if (n < 1) return [];
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j < n; j++) {
      result[i].push(((i + j) % n) + 1);
    }
  }
  return result;
}

// https://www.codewars.com/kata/645fb55ecf8c290031b779ef
