function findEvenIndex(arr) {
  let i = 0;

  while (i < arr.length) {
    const leftSideSum = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
    const rightSideSum = arr.slice(i + 1).reduce((acc, val) => acc + val, 0);

    if (leftSideSum === rightSideSum) {
      return i;
    }
    i++;
  }

  return -1;
}

// https://www.codewars.com/kata/5679aa472b8f57fb8c000047
