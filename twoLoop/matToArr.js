// one loop
function matToArr(mat){
    const newArr = [];
    const sumCol = mat.length;
    const sumRow = mat[0].length;
    let row = 0;
    let col = 0;
    for (let i = 0; i < sumCol * sumRow; i++){
        newArr.push(mat[row][col])
        if(col === sumRow - 1){
            row++;
            col = 0;
        }else{
            col++;
        };
    }
    return newArr;
}

console.log(matToArr([[1, 2, 3], [4, 5, 6], [7, 8, 9], [7, 8, 9]]));


// two loop
function matToArr2(mat){
    const newArr = []
    for (let row = 0; row < mat.length; row++){
        for (let col = 0; col < mat[row].length; col++){
            newArr.push(mat[row][col])
        }
    }
    return newArr
}

// console.log(matToArr2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))