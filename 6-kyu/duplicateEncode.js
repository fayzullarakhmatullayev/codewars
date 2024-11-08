const duplicateEncode = (word) => {
  let chars = [...word.toLowerCase()];
  let duplicateList = chars.filter((char, index, chars) => chars.indexOf(char) !== index);
  let duplicateSet = new Set(duplicateList);
  let uniqueDuplicateList = [...duplicateSet];

  let resultString = '';
  for (let i = 0, n = chars.length; i < n; ++i) {
    if (uniqueDuplicateList.includes(chars[i])) {
      resultString += ')';
    } else {
      resultString += '(';
    }
  }
  return resultString;
};

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
