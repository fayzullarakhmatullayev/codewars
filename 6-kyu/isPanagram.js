function isPangram(string) {
  const chars = {};
  let state = { start: 97, end: 122 };

  for (; state.start <= state.end; state.start++) {
    let key = String.fromCharCode(state.start);
    chars[key] = 0;
  }

  string = string.toLowerCase().split(/\W/gi).join('');

  Array.from({ length: string.length }).forEach((_, i) => {
    const char = string[i];
    if (chars.hasOwnProperty(char)) {
      chars[char] = (chars[char] || 0) + 1;
    }
  });

  return Object.keys(chars).every((char) => chars[char] > 0);
}

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
