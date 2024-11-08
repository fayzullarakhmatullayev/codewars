function permutations(string) {
  var arr = string.split(''),
    tmp = arr.slice(),
    heads = [],
    out = [];
  if (string.length == 1) return [string];
  arr.forEach(function (v, i, arr) {
    if (heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join('')).forEach(function (w) {
        out.push(v + w);
      });
      tmp.push(v);
    }
  });
  return out;
}

// https://www.codewars.com/kata/5254ca2719453dcc0b00027d
