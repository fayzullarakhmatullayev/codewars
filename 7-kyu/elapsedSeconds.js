function elapsedSeconds(startDate, endDate) {
  return getTime(endDate) - getTime(startDate);
}

function getTime(date) {
  return date.getTime() / 1000;
}

// https://www.codewars.com/kata/517b25a48557c200b800000c
