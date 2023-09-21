function getIndexOfChar(str, cahr){
    console.log(str.length)
    for (let i = 0; i < str.length - 1; i++){
        // console.log(str[i])
        if (str[i] === cahr){
            return i
        }
    }return -1
}
getIndexOfChar("12345678", "8")