function nthFibo(n) {
  if (n <= 2) return n - 1;
  return nthFibo(n - 2) + nthFibo(n - 1);
}

// https://www.codewars.com/kata/522551eee9abb932420004a0
