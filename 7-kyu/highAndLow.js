function highAndLow(numbers) {
  const splittedNumbers = numbers.split(' ');

  let highestNum = splittedNumbers[0];
  let lowestNum = splittedNumbers[0];

  for (let i = 0; i < splittedNumbers.length; i++) {
    if (Number(highestNum) < Number(splittedNumbers[i])) {
      highestNum = splittedNumbers[i];
    }

    if (Number(lowestNum) > Number(splittedNumbers[i])) {
      lowestNum = splittedNumbers[i];
    }
  }

  return `${highestNum} ${lowestNum}`;
}

// https://www.codewars.com/kata/554b4ac871d6813a03000035
