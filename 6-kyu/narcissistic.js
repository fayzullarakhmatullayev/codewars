function narcissistic(value) {
  let val = value.toString();
  let len = val.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    sum += val[i] ** len;
  }

  return sum === value;
}

// https://www.codewars.com/kata/5287e858c6b5a9678200083c
