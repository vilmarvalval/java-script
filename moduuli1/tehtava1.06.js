function rootCalc () {
    let initiateRoot = confirm('Should I calculate the square root?')
    let rootResponse
    if (initiateRoot) {
        let rootNumber = parseFloat(prompt('Input number to square: '))
        if (rootNumber < 0) {
            rootResponse = "Square root's of negative value's are undefined!"
        } else {
            rootResponse = 'Square root of '+rootNumber+' is '+Math.sqrt(rootNumber)+'.'
        }

    } else {
        rootResponse = 'The square root will not be calculated.'
    }
    return document.getElementById("p7").innerHTML = rootResponse
}

rootCalc()