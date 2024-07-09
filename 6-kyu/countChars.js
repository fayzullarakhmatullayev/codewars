function count(string) {
    const hash = {};

    for (let char of string) {
        if (char in hash) {
            hash[char] += 1;
        } else {
            hash[char] = 1;
        }
    }

    return hash;
}