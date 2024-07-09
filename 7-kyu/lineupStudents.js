function lineupStudents(students) {
  return students.split(' ').sort((a, b) => b.length - a.length || b.localeCompare(a));
}

// https://www.codewars.com/kata/5701800886306a876a001031
