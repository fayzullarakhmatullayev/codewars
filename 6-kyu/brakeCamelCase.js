function solution(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    string[i].charCodeAt() > 96 ? (result += string[i]) : (result += ` ${string[i]}`);
  }

  return result;
}

// https://www.codewars.com/kata/5208f99aee097e6552000148
