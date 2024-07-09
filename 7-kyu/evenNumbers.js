function evenNumbers(array, number = 0) {
  let evenCount = 0;
  let result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      result.unshift(array[i]);
      evenCount++;
    }
    if (evenCount === number) {
      break;
    }
  }
  return result;
}

// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c
