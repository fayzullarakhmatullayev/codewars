function meeting(s) {
  return s
    .split(';')
    .map((a) => `(${a.toUpperCase().split(':').reverse().join(', ')})`)
    .sort((a, b) => a.localeCompare(b))
    .join('');
}

module.exports = {
  meeting
};
