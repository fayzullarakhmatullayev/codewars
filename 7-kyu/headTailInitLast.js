function head(arr) {
  return +arr.slice(0, 1);
}

function tail(arr) {
  return arr.slice(1);
}

function init(arr) {
  return arr.slice(0, arr.length - 1);
}

function last(arr) {
  return +arr.slice(arr.length - 1);
}

// https://www.codewars.com/kata/54592a5052756d5c5d0009c3
