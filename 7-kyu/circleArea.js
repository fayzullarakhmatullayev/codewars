var circleArea = function (radius) {
  if (typeof radius !== 'number' || radius < 1) return false;
  return Number((Math.PI * (radius * radius)).toFixed(2));
};

// https://www.codewars.com/kata/537baa6f8f4b300b5900106c
