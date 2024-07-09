function squareDigits(num) {
  let result = 0;
  const arrOfNumsStr = num.toString().split('');

  for (let i = 0; i < arrOfNumsStr.length; i++) {
    result += (Number(arrOfNumsStr[i]) ** 2).toString();
  }

  return Number(result);
}

// https://www.codewars.com/kata/546e2562b03326a88e000020
