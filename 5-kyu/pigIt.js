function pigIt(str) {
  const splited = str.split(' ');
  let result = '';

  for (let i = 0; i < splited.length; i++) {
    if (splited[i] !== '!' && splited[i] !== '?') {
      result += splited[i].slice(1) + splited[i].slice(0, 1) + 'ay ';
    } else {
      result += splited[i];
    }
  }

  return result.trim();
}

// https://www.codewars.com/kata/520b9d2ad5c005041100000f
