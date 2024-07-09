function humanReadable(seconds) {
  const hours = seconds / 3600,
    minutes = (seconds / 60) % 60,
    newSeconds = seconds % 60;
  return formatDate(hours) + ':' + formatDate(minutes) + ':' + formatDate(newSeconds);
}

function formatDate(n) {
  const number = Number.parseInt(n);
  return number > 9 ? number : '0' + number;
}

// https://www.codewars.com/kata/52685f7382004e774f0001f7
