function wave(str) {
    if (typeof str !== 'string') return [];
    const result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
        }
    }

    return result;
}

// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029