function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  if (array1.length !== array2.length) return false;

  let frequencyMap1 = {};
  let frequencyMap2 = {};

  // Populate the frequency map for array1
  for (let num of array1) {
    let square = num * num;
    frequencyMap1[square] = (frequencyMap1[square] || 0) + 1;
  }

  // Populate the frequency map for array2
  for (let num of array2) {
    frequencyMap2[num] = (frequencyMap2[num] || 0) + 1;
  }

  // Compare the frequency maps
  for (let key in frequencyMap1) {
    if (frequencyMap1[key] !== frequencyMap2[key]) {
      return false;
    }
  }

  return true;
}

// https://www.codewars.com/kata/550498447451fbbd7600041c
