const decodeMorse = function (morseCode) {
  const getMorseCord = morseCode.split('  ');
  const arr = [];
  let str = '';
  getMorseCord.map((w) => {
    w.split(' ').map((i) => {
      switch (i) {
        case '.-':
          i = 'A';
          break;
        case '-...':
          i = 'B';
          break;
        case '-.-.':
          i = 'C';
          break;
        case '-..':
          i = 'D';
          break;
        case '.':
          i = 'E';
          break;
        case '..-.':
          i = 'F';
          break;
        case '--.':
          i = 'G';
          break;
        case '....':
          i = 'H';
          break;
        case '..':
          i = 'I';
          break;
        case '.---':
          i = 'J';
          break;
        case '-.-':
          i = 'K';
          break;
        case '.-..':
          i = 'L';
          break;
        case '--':
          i = 'M';
          break;
        case '-.':
          i = 'N';
          break;
        case '---':
          i = 'O';
          break;
        case '.--.':
          i = 'P';
          break;
        case '--.-':
          i = 'Q';
          break;
        case '.-.':
          i = 'R';
          break;
        case '...':
          i = 'S';
          break;
        case '-':
          i = 'T';
          break;
        case '..-':
          i = 'U';
          break;
        case '...-':
          i = 'V';
          break;
        case '.--':
          i = 'W';
          break;
        case '-..-':
          i = 'X';
          break;
        case '-.--':
          i = 'Y';
          break;
        case '--..':
          i = 'Z';
          break;
        case '...---...':
          i = 'SOS';
          break;
        case '-.-.--':
          i = '!';
          break;
        case '.-.-.-':
          i = '.';
          break;
      }
      arr.push(i.split('').join(''));
    });
  });
  arr.map((k) => {
    if (!k.length) {
      k = ' ';
    }
    str += k;
  });
  return str.trim();
};

// https://www.codewars.com/kata/54b724efac3d5402db00065e
