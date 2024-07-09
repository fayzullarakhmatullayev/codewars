function solution(str) {
  let result = [];

  if (str.length % 2) str = str + '_';

  for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2));
  }

  return result;
}

// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
