function titleCase(title, minorWords){
    if (!title) return title;
    let result = [];

    const minorWordsArr = minorWords && minorWords.split(' ');

    const split = title.split(' ');
    for (let i = 0; i < split.length; i++) {
        const char = split[i].toLowerCase();
        const includes = minorWords &&  minorWordsArr.some((el) => el.toLowerCase() === char.toLowerCase());
        if (i !== 0 && includes) {
            result.push(char.toLowerCase());
        } else {
            const str = char.length > 1 ? char[0].toUpperCase() + char.slice(1) : char[0].toUpperCase();
            result.push(str);
        }
    }

    return result.join(' ');
}



//https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript