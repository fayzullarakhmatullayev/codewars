function evaporator(content, evap_per_day, threshold) {
  let days = 0;
  let fill = 100;
  while (fill >= threshold) {
    days += 1;
    fill -= (fill * evap_per_day) / 100;
  }

  return days;
}

// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f
