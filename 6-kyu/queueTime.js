function queueTime(customers, n) {
    let arr = Array(n).fill(0)


    for(let customer of customers){
        let min = arr.indexOf(Math.min(...arr))
        arr[min] += customer
    }

    return Math.max(...arr)
}
// https://www.codewars.com/kata/57b06f90e298a7b53d000a86