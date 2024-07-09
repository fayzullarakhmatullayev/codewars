function findOdd(arr) {
  let result = 0;
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }

  for (let i in obj) {
    if (obj[i] % 2 === 1) {
      result = Number(i);
    }
  }

  return result;
}

// https://www.codewars.com/kata/54da5a58ea159efa38000836
