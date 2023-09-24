function findTwoNumSum(arr, num){
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] === num){
            return true
        }
        let sumTest = arr[i]
        for (let j = i + 1; j < arr.length - 1; j++){
            sumTest += arr[j]
            if (sumTest === num){
                return true
            }
        }
    }
    return false
}

console.log(findTwoNumSum([1, 7, 3, 8, 2], 4))