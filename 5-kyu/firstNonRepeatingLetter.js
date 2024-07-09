function firstNonRepeatingLetter(string) {
  let hash = {};
  let result = '';

  for (let key of string) {
    let lowerCaseKey = key.toLowerCase();
    if (!hash.hasOwnProperty(lowerCaseKey)) {
      hash[lowerCaseKey] = { value: key, count: 1 };
    } else {
      hash[lowerCaseKey] = {
        value: key,
        count: hash[lowerCaseKey].count + 1
      };
    }
  }

  for (let key in hash) {
    if (hash[key].count === 1) {
      result = hash[key].value;
      break;
    }
  }

  return result;
}

// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
