function order(words) {
  let splitted = words.split(' ');
  let res = [];
  let regex = /\d+/g;

  for (let i = 0; i < splitted.length; i++) {
    let num = splitted[i].match(regex);
    if (num) {
      res[num - 1] = splitted[i];
    } else {
      res.push(splitted[i]);
    }
  }

  return res.join(' ');
}
// https://www.codewars.com/kata/55c45be3b2079eccff00010f
