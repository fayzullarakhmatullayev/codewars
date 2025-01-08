function deleteNth(arr, n) {
  const map = new Map();
  const answer = [];

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);

    if (map.get(num) <= n) {
      answer.push(num);
    }
  }

  return answer;
}

console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);
console.log(deleteNth([12, 39, 19, 39, 39, 19, 12], 1), [12, 39, 19]);
console.log(
  deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3),
  [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5]
);
