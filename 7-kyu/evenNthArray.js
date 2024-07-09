function every(arr, interval = 1, start = 0) {
  let result = [];

  for (let i = start; i < arr.length; i += interval) {
    result.push(arr[i]);
  }

  return result;
}

// https://www.codewars.com/kata/5753b987aeb792508d0010e2
