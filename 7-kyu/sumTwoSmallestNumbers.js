function sumTwoSmallestNumbers(numbers) {
  let smallest1 = Infinity;
  let smallest2 = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest1) {
      smallest2 = smallest1;
      smallest1 = numbers[i];
    } else if (numbers[i] < smallest2) {
      smallest2 = numbers[i];
    }
  }
  return smallest1 + smallest2;
}

// https://www.codewars.com/kata/558fc85d8fd1938afb000014
