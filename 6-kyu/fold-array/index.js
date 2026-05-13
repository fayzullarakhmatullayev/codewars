function foldArray(array, runs) {
  if (runs < 1) return array;

  const result = [];

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    result.push(left !== right ? array[left] + array[right] : array[left]);

    left++;
    right--;
  }

  return runs === 1 ? result : foldArray(result, runs - 1);
}

console.log(foldArray([-9, 9, -8, 8, 66, 23], 2));

module.exports = {
  foldArray
};
