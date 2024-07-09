function oddOrEven(array) {
  if (array.length === 0) return 'even';

  const sum = array.reduce((acc, val) => acc + val, 0);

  return sum % 2 === 0 ? 'even' : 'odd';
}

// https://www.codewars.com/kata/5949481f86420f59480000e7
