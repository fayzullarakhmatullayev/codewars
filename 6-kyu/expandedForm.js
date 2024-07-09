function expandedForm(num) {
  let nums = num.toString();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== '0') {
      let sum = nums[i];
      for (let j = nums.length - i - 1; j > 0; j--) {
        sum += '0';
      }
      result.push(sum);
    }
  }

  return result.join(' + ');
}

// https://www.codewars.com/kata/5842df8ccbd22792a4000245
