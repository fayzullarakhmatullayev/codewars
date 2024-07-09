function makeNegative(num) {
  const result = num.toString();

  return result[0] === '-' ? Number(result) : Number(`-${result}`);
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102
