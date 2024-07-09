function feast(beast, dish) {
  if (typeof beast !== 'string' || typeof dish !== 'string') return false;
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}
