function sumPairs(ints, s) {
  const hash = {};

  for (let i = 0; i < ints.length; i++) {
    const diff = s - ints[i];

    if (diff in hash) {
      return [diff, ints[i]];
    } else {
      hash[ints[i]] = i;
    }
  }

  return;
}

module.exports = {
  sumPairs
};
