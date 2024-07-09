function high(x) {
  let score = 0;
  let result = '';
  const wordCollections = x.split(' ');

  function calculateScore(word) {
    let score = 0;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < word.length; i++) {
      const index = alphabet.indexOf(word[i]);
      score += index + 1;
    }

    return score;
  }

  for (let i = 0; i < wordCollections.length; i++) {
    let newScore = calculateScore(wordCollections[i]);
    if (newScore > score) {
      score = newScore;
      result = wordCollections[i];
    }
  }

  return result;
}

// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
