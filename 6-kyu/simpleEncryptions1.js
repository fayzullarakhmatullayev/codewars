function encrypt(text, n) {
  if (!text || n <= 0) return text;

  for (let i = 0; i < n; i++) {
    let evens = '';
    let ods = '';
    for (let j = 0; j < text.length; j++) {
      if (j % 2 === 0) {
        evens += text[j];
      } else {
        ods += text[j];
      }
    }
    text = ods.concat(evens);
  }

  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;

  for (let i = 0; i < n; i++) {
    let answer = '';
    let mid = Math.floor(encryptedText.length / 2);
    let ods = encryptedText.slice(0, mid);
    let evens = encryptedText.slice(mid);
    let e = 0,
      o = 0;
    for (let j = 0; j < encryptedText.length; j++) {
      if (j % 2 === 0) {
        answer += evens[e];
        e++;
      } else {
        answer += ods[o];
        o++;
      }
    }
    encryptedText = answer;
  }

  return encryptedText;
}

//https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript
