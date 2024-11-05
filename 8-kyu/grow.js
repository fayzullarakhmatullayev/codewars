function grow(x) {
  let sum = x[0];

  for (let i = 1; i < x.length; i++) {
    sum *= x[i];
  }

  return sum;
}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);
