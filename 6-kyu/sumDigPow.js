function sumDigPow(a, b) {
    let result = [];
    for (let i = a; i < b; i++) {
        if (isConsecutivePowers(i)) {
            result.push(i);
        }
    }
    return result;
}

function isConsecutivePowers(num) {
    const arr = num.toString().split('');
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += Math.pow(Number(arr[i]), i + 1);
    }

    return result === num;
}

// https://www.codewars.com/kata/5626b561280a42ecc50000d1