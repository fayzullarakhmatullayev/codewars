function highestRank(arr) {
  // Create an object to store the frequency of each element
  var frequency = {};

  // Iterate through the array and count the frequency of each element
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    frequency[num] = frequency[num] ? frequency[num] + 1 : 1;
  }

  // Find the element(s) with the highest frequency
  var maxFrequency = 0;
  var result = [];

  for (var key in frequency) {
    if (frequency[key] > maxFrequency) {
      maxFrequency = frequency[key];
      result = [key];
    } else if (frequency[key] === maxFrequency) {
      result.push(key);
    }
  }

  return Math.max(...result.map(Number));
}

// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
