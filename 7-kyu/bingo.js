function bingo(arr) {
  return [...'bingo'].map((x) => x.charCodeAt(0) - 96).every((o) => arr.includes(o))
    ? 'WIN'
    : 'LOSE';
}

// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145
