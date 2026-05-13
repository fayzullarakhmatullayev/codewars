function tripledouble(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);

  const triples = new Set();

  let streak = 1;

  for (let i = 1; i < str1.length; i++) {
    if (str1[i] === str1[i - 1]) {
      streak++;
      if (streak >= 3) {
        triples.add(str1[i]);
      }
    } else {
      streak = 1;
    }
  }

  streak = 1;

  for (let i = 1; i < str2.length; i++) {
    if (str2[i] === str2[i - 1]) {
      streak++;
      if (streak >= 2 && triples.has(str2[i])) {
        return 1;
      }
    } else {
      streak = 1;
    }
  }

  return 0;
}

console.log(tripledouble(123123123, 123123), 0);
console.log(tripledouble(111, 88), 0);
console.log(tripledouble(1222345, 12345), 0);
console.log(tripledouble(666789, 12345667), 1);

module.exports = {
  tripledouble
};
