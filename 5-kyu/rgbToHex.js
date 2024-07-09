const rgb = (r, g, b) =>
  [r, g, b]
    .map((x) => {
      if (x < 0) return '0' + 0;
      if (x > 255) return 'FF';
      const hex = x.toString(16).toUpperCase();
      return hex.length === 1 ? '0' + hex : hex;
    })
    .join('');

// https://www.codewars.com/kata/513e08acc600c94f01000001
