function toWeirdCase(string) {
    let result = [];
    let arr = string.split(' ');

    for (let i = 0; i < arr.length; i++) {
        let str = ''
        for (let j = 0; j < arr[i].length; j++) {
            str+= j % 2 === 1 ? arr[i][j].toLowerCase() : arr[i][j].toUpperCase()
        }
        result.push(str)
    }

    return result.join(' ');
}

// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript