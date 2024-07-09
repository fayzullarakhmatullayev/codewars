function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }

  return count;
}

// https://www.codewars.com/kata/54ff3102c1bad923760001f3
