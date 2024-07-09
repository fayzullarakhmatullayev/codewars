function basicOp(operation, value1, value2) {
  const cases = {
    '+': () => value1 + value2,
    '-': () => value1 - value2,
    '*': () => value1 * value2,
    '/': () => value1 / value2
  };

  return cases[operation]();
}
