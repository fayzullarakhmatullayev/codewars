function duplicateCount(text) {
  let obj = {};
  let sum = 0;

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    obj[char] = (obj[char] || 0) + 1;
  }
  obj = Object.values(obj).sort();

  for (let i = 0; i < obj.length; i++) {
    if (obj[i] > 1) {
      sum++;
    }
  }

  return sum;
}

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
