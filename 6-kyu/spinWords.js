function spinWords(string) {
  const words = string.split(' ');
  const arr = [];
  words.forEach((word) => {
    const getWord = word.split('');
    const reversedWords = getWord.length > 4 ? getWord.reverse() : getWord;
    arr.push(reversedWords.join(''));
  });

  return arr.join(' ');
}

// https://www.codewars.com/kata/5264d2b162488dc400000001
