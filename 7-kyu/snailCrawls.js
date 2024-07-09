function snail(column, day, night) {
    let count = 0;
    let target = 0;

    while (column > target) {
        count++;
        target += day;
        if (target >= column) break;
        target -= night;
    }

    return count;
}

// https://www.codewars.com/kata/5b93fecd8463745630001d05