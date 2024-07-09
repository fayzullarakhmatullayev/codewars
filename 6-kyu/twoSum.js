function twoSum(numbers, target) {
    let hash = {}

    for(let i = 0; i <  numbers.length; i++){
        const num = numbers[i]
        const diff = target - num;
        if(diff in hash){
            return [hash[diff], i]
        }
        hash[num] = i
    }

    return []
}

// https://www.codewars.com/kata/52c31f8e6605bcc646000082