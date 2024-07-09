function solution(number) {
  let oddNumsLists = [];

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      oddNumsLists.push(i);
    }
  }

  return oddNumsLists.reduce((acc, val) => acc + val, 0);
}

// https://www.codewars.com/kata/514b92a657cdc65150000006
