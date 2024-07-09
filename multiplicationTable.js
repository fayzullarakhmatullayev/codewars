const multiplicationTable = (size) => {
    const arr = Array.from({length: size}).fill(null)
    return arr.map((_, i) => arr.map((__, j) => (i + 1) * (j + 1)))
}

console.log(multiplicationTable(3))
