function cakes(recipe, available) {
  let result = [];

  for (let key in recipe) {
    result.push(Math.floor(available[key] / recipe[key]));
  }

  const returnResult = Math.min(...result);

  if (isNaN(returnResult)) return 0;

  return returnResult;
}

// https://www.codewars.com/kata/525c65e51bf619685c000059
