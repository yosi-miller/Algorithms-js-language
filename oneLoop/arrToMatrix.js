function arrToMatrix(arr, cols){
    const matrixArr = []
    let colArr = []
    for (let i = 0; i < arr.length; i++){
        colArr.push(arr[i])
        if (colArr.length === cols){
            matrixArr.push(colArr)
            colArr = []
        }
    }
    return matrixArr
}

console.log(arrToMatrix([1, 2, 3, 4, 5, 6], 2))