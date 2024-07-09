function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;

  let result = '';

  const addDiamonds = (i, result) => {
    let str = '';

    for (let k = i + 1; k < n; k++) {
      str += ' ';
    }

    for (let j = n - i - 2; j < i; j++) {
      str += '*';
    }
    if (str.includes('*')) result += str + '\n';

    return result;
  };

  for (let i = 0; i < n; i++) {
    result = addDiamonds(i, result);
  }

  for (let i = n - 2; i > 0; i--) {
    result = addDiamonds(i, result);
  }

  return result;
}

// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
