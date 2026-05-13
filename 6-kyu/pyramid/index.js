function pyramid(n) {
  return Array.from({ length: n }, (_, i) => Array(i + 1).fill(1));
}

console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));

module.exports = {
  pyramid
};
