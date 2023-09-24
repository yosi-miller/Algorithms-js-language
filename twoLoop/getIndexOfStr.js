function getIndexOfStr(strSource, strFind){
    for (let i = 0; i < strSource.length - 1; i++){
        if (strSource[i] === strFind){
            return true
        }
        let strTest = strSource[i]
        for (let j = i + 1; j < strSource.length - 1; j++){
            strTest += strSource[j]
            if (strTest === strFind){
                return true
            }
        }
    }
    return false
}

console.log(getIndexOfStr("abcdefg", "aba"))