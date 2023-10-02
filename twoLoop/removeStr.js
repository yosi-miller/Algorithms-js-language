function removeStr(str, strRemove){
    let newStr = ""
    let stop = ""
    let start = ""
    for (let i = 0; i < str.length - 1; i++){
        if (arr[i] === strRemove){
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

}