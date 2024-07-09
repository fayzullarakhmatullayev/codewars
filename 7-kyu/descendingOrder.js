function descendingOrder(n) {
  if (n === undefined) return 987654321;
  const splittedNumbers = n.toString().split('');
  const nums = splittedNumbers.sort((a, b) => b - a);
  return Number(nums.join(''));
}

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
