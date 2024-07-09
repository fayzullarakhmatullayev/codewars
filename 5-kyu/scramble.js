function scramble(str1, str2) {
  const charCount = {};

  for (let char of str1) {
    charCount[char] = !charCount.hasOwnProperty(char) ? 1 : charCount[char] + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}

// https://www.codewars.com/kata/55c04b4cc56a697bb0000048
