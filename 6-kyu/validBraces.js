function validBraces(braces) {
  if (!braces || braces.length % 2 === 1) return false;

  const valid = { '(': ')', '[': ']', '{': '}' };
  const stack = [];

  for (let i = 0; i < braces.length; i++) {
    if (valid[braces[i]]) {
      stack.push(braces[i]);
    } else if (valid[stack.pop()] !== braces[i]) {
      return false;
    }
  }

  return stack.length === 0;
}

// https://www.codewars.com/kata/5277c8a221e209d3f6000b56
