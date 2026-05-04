function ipToNumber(ipStr) {
  return ipStr
    .split('.')
    .map(Number)
    .reduce((total, octet) => total * 256 + octet, 0);
}

function ipsBetween(start, end) {
  return ipToNumber(end) - ipToNumber(start);
}

module.exports = {
  ipsBetween
};
