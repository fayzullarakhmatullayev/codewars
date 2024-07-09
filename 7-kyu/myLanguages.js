function myLanguages(results) {
  let result = [];
  for (let i in results) {
    if (results[i] > 59) {
      result.push(i);
    }
  }
  return result.sort((a, b) => results[b] - results[a]);
}

// https://www.codewars.com/kata/5b16490986b6d336c900007d
