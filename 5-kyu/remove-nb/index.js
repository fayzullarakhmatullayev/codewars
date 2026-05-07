function removeNb(n) {
  const total = (n * (n + 1)) / 2;
  const result = [];

  for (let a = 1; a <= n; a++) {
    const b = (total - a) / (a + 1);

    if (Number.isInteger(b) && b <= n) {
      result.push([a, b]);
    }
  }

  return result;
}

module.exports = {
  removeNb
};
