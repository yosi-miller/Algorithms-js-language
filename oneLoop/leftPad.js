function leftPad(str, char, pad){
    let padStr = ""
    while ((padStr.length + str.length) < pad){
        padStr += char
    }
    return padStr + str
}

console.log(leftPad("baaa", "o", 5))