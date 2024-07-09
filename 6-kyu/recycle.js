function recycle(array) {
  const recyclerMaterials = ['paper', 'glass', 'organic', 'plastic'];
  return recyclerMaterials.map((m) =>
    array.filter((o) => o.material == m || o.secondMaterial == m).map((o) => o.type)
  );
}

// https://www.codewars.com/kata/5b6db1acb118141f6b000060
