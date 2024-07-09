function domainName(url) {
  let sourceString = url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split(/[/?#]/)[0];
  let domain = sourceString.split('.')[0];
  return domain;
}

// https://www.codewars.com/kata/514a024011ea4fb54200004b
