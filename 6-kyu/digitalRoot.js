function digitalRoot(n) {
  const nums = n.toString().split('');
  let sum = 0;

  if (nums.length == 1) {
    return +nums[0];
  }

  for (let i = 0; i < nums.length; i++) {
    sum += +nums[i];
  }

  return digitalRoot(sum);
}

// https://www.codewars.com/kata/541c8630095125aba6000c00
