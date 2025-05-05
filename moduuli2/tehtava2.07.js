//Modify the function above so that it gets the number of sides on the dice as a parameter.
//With the modified function you can for example roll a 21-sided role-playing dice.
//The difference to the last exercise is that the dice rolling
// in the main program continues until the program gets the maximum number on the dice,
// which is asked from the user at the beginning. (2p)

function rollCustomDice(customDieFaceCount){
    return Math.ceil( Math.random()*customDieFaceCount)
}
let customRollCheck
let allCustomDieRolls =[]

let dieFaceCount = parseInt( prompt("Insert desired face count of die."))
while (customRollCheck !==dieFaceCount){
    customRollCheck = rollCustomDice(dieFaceCount)
    allCustomDieRolls.push(customRollCheck)
}

let listCustomRolls = document.getElementById("Ap07")
for (let i=0;i<allCustomDieRolls.length;i++){
    let li = document.createElement("li")
    li.innerText = allCustomDieRolls[i]
    listCustomRolls.appendChild(li)
}