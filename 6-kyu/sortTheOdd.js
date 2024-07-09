function sortArray(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    if (val % 2 !== 0) {
      result.push(val);
      array[i] = null;
    }
  }

  result = result.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    if (val === null) {
      array[i] = result[0];
      result = result.slice(1);
    }
  }

  return array;
}

// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
