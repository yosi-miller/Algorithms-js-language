function createMat(row, col){
    const result = []
    let rows = []
    for (let i = 0; i < row * col; i++){
        rows.push(0)
        if (rows.length === col){
            result.push(rows)
            rows = []
        }
    }
    return result
}

console.log(createMat(3, 3))