function longestConsec(strarr, k) {
  if (k < 0 || k > strarr.length) return '';

  let res = '';

  for (let i = 0; i < strarr.length; i++) {
    let str = '';
    for (let j = i; j < k + i; j++) {
      if (strarr[j]) {
        str += strarr[j];
      }
    }

    if (str.length > res.length) {
      res = str;
    }
  }

  return res;
}

// https://www.codewars.com/kata/56a5d994ac971f1ac500003e
