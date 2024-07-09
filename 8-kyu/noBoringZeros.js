function noBoringZeros(n) {
  if (n === 0) return n;
  let numbers = n.toString().split('');
  if (Number(numbers[numbers.length - 1]) === 0) {
    return noBoringZeros(Number(numbers.slice(0, -1).join('')));
  } else {
    return Number(numbers.join(''));
  }
}

// https://www.codewars.com/kata/570a6a46455d08ff8d001002
