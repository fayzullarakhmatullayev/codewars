function towerBuilder(nFloors) {

    let result = [];

    for (let i = 0; i < nFloors; i++) {
        let val = '';
        for (let j = 0; j < nFloors - i - 1; j++) {
            val += ' ';
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            val += '*';
        }

        for (let j = 0; j < nFloors - i - 1; j++) {
            val += ' ';
        }
        result.push(val);
    }

    return result;
}

// https://www.codewars.com/kata/576757b1df89ecf5bd00073b