function sortByLength(array) {
  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length - 1 - i; ++j) {
      if (array[j].length > array[j + 1].length) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
