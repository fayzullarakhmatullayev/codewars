function isValidIP(str) {
  const chars = str.split('.');

  if (chars.length !== 4 || !str) return false;

  const isOnlyDigits = (str) => /^(0|[1-9]\d*)$/.test(str);

  for (let i = 0; i < chars.length; i++) {
    if (!isOnlyDigits(chars[i]) || +chars[i] < 0 || +chars[i] > 255) return false;
  }

  return true;
}

// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript
