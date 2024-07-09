function explode(s) {
  return s
    .split('')
    .map((d) => {
      let y = '';
      for (let i = 0; i < +d; i++) {
        y += d;
      }
      return y;
    })
    .join('');
}

// https://www.codewars.com/kata/585b1fafe08bae9988000314
