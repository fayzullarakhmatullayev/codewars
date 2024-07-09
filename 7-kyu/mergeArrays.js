function mergeArrays(a, b) {
  let i = 0;
  let j = 0;

  let maxLength = a.length + b.length - 1;
  let res = [];
  while (maxLength > 0) {
    if (a.length !== i) {
      res.push(a[i++]);
    }
    if (b.length !== j) {
      res.push(b[j++]);
    }

    maxLength--;
  }

  return res;
}

// https://www.codewars.com/kata/583af10620dda4da270000c5
