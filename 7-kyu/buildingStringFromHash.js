function solution(pairs) {
  let res = '';
  let count = 0;
  for (let key in pairs) {
    count++;
    res += `${count !== 1 ? ',' : ''}${key} = ${pairs[key]}`;
  }

  return res;
}

// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2
