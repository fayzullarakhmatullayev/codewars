console.log('Running...');
console.log('-----------------');

export function cleanString(s: string): string {
  const stack: string[] = [];

  for (const char of s) {
    if (char === '#') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}

console.log(cleanString('abc#d##c'), 'ac');
console.log(cleanString('abc####d##c#'), '');

console.log('-----------------');
console.log('Done');

//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/typescript
