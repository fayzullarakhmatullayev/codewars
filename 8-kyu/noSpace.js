function noSpace(x) {
  let res = '';

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== ' ') {
      res += x[i];
    }
  }

  return res;
}

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5
