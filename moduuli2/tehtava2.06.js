function rollDice(){
    return Math.ceil( Math.random()*6)
}
let rollCheck
let allDieRolls =[]
while (rollCheck !==6){
    rollCheck = parseInt( rollDice())
    allDieRolls.push(rollCheck)
}

let listRolls = document.getElementById("Ap06")
for (let i=0;i<allDieRolls.length;i++){
    let li = document.createElement("li")
    li.innerText = allDieRolls[i]
    listRolls.appendChild(li)
}