function ave(arr){
    let ave = {amount: 0, sum: 0}
    // if ()
    for (let i = 0; i < arr.length; i++){
        ave["amount"] += arr[i]
        ave["sum"] += 1
    }
    console.log(ave)
    return ave.amount / ave.sum
}


const arry = [0]

console.log(ave(arry))