function noonerize(numbers) {
  const [first, last] = numbers;

  const res =
    Number(last.toString()[0] + first.toString().slice(1)) -
    Number(first.toString()[0] + last.toString().slice(1));

  if (isNaN(res)) return 'invalid array';
  if (res < 0) return Number(res.toString().slice(1));
  return res;
}

// https://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd
