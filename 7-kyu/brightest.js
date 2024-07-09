function brightest(colors) {
  if (!colors.length) return;
  let maxValue = 0;
  let colorIndex = 0;

  colors.forEach((color, i) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    const value = Math.max(r, g, b);
    if (value > maxValue) {
      maxValue = value;
      colorIndex = i;
    }
  });

  return colors[colorIndex];
}
