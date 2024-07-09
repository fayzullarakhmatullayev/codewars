function toCamelCase(str) {
  const regex = /[ _-]/g;
  const splitted = str.split(regex);
  let result = '';

  for (let index = 0; index < splitted.length; index++) {
    const char = splitted[index];
    if (index !== 0) {
      result += char.length > 1 ? char[0].toUpperCase() + char.slice(1) : char[0].toUpperCase();
    } else {
      result += char;
    }
  }

  return result;
}

// https://www.codewars.com/kata/517abf86da9663f1d2000003
