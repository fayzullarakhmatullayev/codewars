function moveZeros(arr) {
  let zeroCollection = [];
  let noneZeroCollection = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCollection.push(arr[i]);
    } else {
      noneZeroCollection.push(arr[i]);
    }
  }

  return noneZeroCollection.concat(zeroCollection);
}

// https://www.codewars.com/kata/52597aa56021e91c93000cb0
