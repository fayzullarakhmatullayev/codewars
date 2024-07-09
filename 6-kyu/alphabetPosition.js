function alphabetPosition(text) {
  const hash = {};
  const startCharCode = 'a'.charCodeAt(0);
  let result = '';
  for (let i = 0; i < 26; i++) {
    const key = String.fromCharCode(startCharCode + i);
    hash[key] = i + 1;
  }

  for (let char of text) {
    if (hash.hasOwnProperty(char.toLowerCase())) {
      result += ' ' + hash[char.toLowerCase()];
    }
  }

  return result.trim();
}

// https://www.codewars.com/kata/546f922b54af40e1e90001da
