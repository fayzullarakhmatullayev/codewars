String.prototype.camelCase = function () {
    if (this.length === 0) return '';

    const chars = this.split(' ');
    let result = '';
    for (let char of chars) {
        result += char[0].toUpperCase() + char.slice(1);
    }

    return result;
};