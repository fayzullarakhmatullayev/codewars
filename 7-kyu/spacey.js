function spacey(array) {
  let prev = '';
  return array.reduce((acc, val) => {
    prev += val;
    acc.push(prev);
    return acc;
  }, []);
}

// https://www.codewars.com/kata/56576f82ab83ee8268000059
