function chooseBestSum(t, k, ls) {
  let best = null;

  function dfs(start, count, sum) {
    if (sum > t) return;

    if (count === k) {
      if (sum <= t) {
        best = Math.max(best, sum);
      }
      return;
    }

    for (let i = start; i < ls.length; i++) {
      dfs(i + 1, count + 1, sum + ls[i]);
    }
  }

  dfs(0, 0, 0);

  return best;
}

const ts = [91, 74, 73, 85, 73, 81, 87];

const choises = [
  [50, 55, 57],
  [50, 55, 58],
  [50, 55, 60],
  [50, 57, 58],
  [50, 57, 60],
  [50, 58, 60],
  [55, 57, 58],
  [55, 57, 60],
  [55, 58, 60],
  [57, 58, 60]
];

console.log(chooseBestSum(230, 3, ts)); // 228

module.exports = {
  chooseBestSum
};

function combinations(items) {
  const path = [];

  function dfs(start) {
    if (path.length == 2) {
      console.log([...path]);
      return;
    }

    for (let i = start; i < items.length; i++) {
      console.log(items[i], `dfs(${i + 1})`);
      path.push(items[i]); // choose

      dfs(i + 1); // explore

      path.pop(); // undo (backtrack)
    }
  }

  dfs(0);
}

console.log(combinations(['A', 'B', 'C']));
