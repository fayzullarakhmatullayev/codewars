function dnaStrand(dna) {
  const dnaObj = { A: 'T', T: 'A', G: 'C', C: 'G' };

  let result = '';

  for (let i = 0; i < dna.length; i++) {
    result += dnaObj[dna[i]];
  }

  return result;
}

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038
