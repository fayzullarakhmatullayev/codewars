function find(object, path) {
  path = path.split(/[.]/);
  for (i in path) {
    if (object.hasOwnProperty(path[i])) {
      object = object[path[i]];
    } else {
      return undefined;
    }
  }
  return object;
}

// https://www.codewars.com/kata/59418db3f5c394eca80000ef
