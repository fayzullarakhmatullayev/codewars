function findOutlier(integers) {
  //your code here
  let odd = [];
  let even = [];
  integers.filter((num) => {
    if (num % 2 === 0 && num !== '') {
      even.push(num);
    } else {
      odd.push(num);
    }
  });
  return odd.length === 1 ? odd[0] : even[0];
}

// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
