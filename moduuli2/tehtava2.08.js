let nameArray = ["Johnny", "DeeDee", "Joey", "Marky"]

function concat(array){
    let string=""
    for(let i=0; i<array.length;i++){
        string += array[i]
    }
    return string
}

document.getElementById("Ap08").innerHTML = concat(nameArray)