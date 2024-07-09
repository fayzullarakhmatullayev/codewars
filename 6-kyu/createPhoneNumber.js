function createPhoneNumber(numbers) {
  const stringOfNums = numbers.join('');
  const firstPart = stringOfNums.slice(0, 3);
  const secondPart = stringOfNums.slice(3, 6);
  const lastPart = stringOfNums.slice(6);

  return `(${firstPart}) ${secondPart}-${lastPart}`;
}

// https://www.codewars.com/kata/525f50e3b73515a6db000b83
