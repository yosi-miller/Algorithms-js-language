function avg(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}


const arry = [1,2,3,4]

console.log(ave(arry))