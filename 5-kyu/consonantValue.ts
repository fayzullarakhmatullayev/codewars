console.log('Running...');

console.log('-----------------------');

const MAP: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
};

const CONSONANTS = 'aeiou';

export function solve(s: string) {
  let text = '';

  for (const char of s) {
    if (CONSONANTS.includes(char)) {
      text += '#';
    } else {
      text += char;
    }
  }

  const texts: string[] = text.split('#').filter(Boolean);

  const values: number[] = [];

  for (const text of texts) {
    let count = 0;
    for (const char of text) {
      count += MAP[char];
    }
    values.push(count);
  }

  let max: number = 0;

  for (let value of values) {
    max = Math.max(value, max);
  }

  return max;
}

console.log(solve('zodiac'), 26);
console.log(solve('chruschtschov'), 80);
console.log(solve('khrushchev'), 38);

console.log('-----------------------');
console.log('DONE');

// https://www.codewars.com/kata/59c633e7dcc4053512000073/train/typescript

/**
 * 
 *  THE BEST SOLUTION
 *  -------------------------
  const VOWELS = 'aeiou';

  export function solve(s: string) {
    let max = 0;
    let current = 0;

    for (const char of s) {
      if (VOWELS.includes(char)) {
        max = Math.max(max, current);
        current = 0;
      } else {
        current += char.charCodeAt(0) - 96;
      }
    }

    return Math.max(max, current);
  }
 * 
 */
