function getRandInt(){
    return Math.floor(Math.random()*4)
}
const classes= ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]

//Tehtävän annon mukaan tehty:
const randomnumber = getRandInt()+1
if (randomnumber === 1){
    picked_class = 1
} else if (randomnumber ===2 ) {
    picked_class = 2
} else if (randomnumber ===3 ) {
    picked_class = 3
} else if (randomnumber ===4 ) {
    picked_class = 4
}
document.getElementById("p6").innerHTML = name+', you are '+classes[picked_class]

//Sama suppeammassa muodossa:
//document.getElementById("p6").innerHTML = name+', you are '+classes[getRandInt()]