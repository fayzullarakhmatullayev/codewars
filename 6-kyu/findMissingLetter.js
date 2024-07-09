function findMissingLetter(array) {
  let isUpperCase = /[A-Z]/.test(array[0]);
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  if (isUpperCase) {
    alphabet = alphabet.toUpperCase();
  }

  let start = alphabet.indexOf(array[0]);

  for (let i = 0; i < array.length; i++, start++) {
    let val = array[i];
    if (val === alphabet[start]) {
      result = alphabet[start + 1];
    }
  }

  return result;
}

// https://www.codewars.com/kata/5839edaa6754d6fec10000a2
