function countSmileys(arr) {
  const smileyPattern = /^[:;][-~]?[)D]$/;
  return arr.filter((smiley) => smileyPattern.test(smiley)).length;
}

// https://www.codewars.com/kata/583203e6eb35d7980400002a
