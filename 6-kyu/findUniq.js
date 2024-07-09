function findUniq(arr) {
  let hash = {};
  let uniqueKey = null;

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = (hash[arr[i]] || 0) + 1;
  }

  for (let key in hash) {
    if (hash[key] === 1) {
      uniqueKey = +key;
    }
  }

  return uniqueKey;
}

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
