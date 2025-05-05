let allPromptedNumbers = []
let doNumberPrompting = true
let pushNumber = prompt("Give a number:")


while (doNumberPrompting){
    allPromptedNumbers.push(pushNumber)
    pushNumber = prompt("Give a number:")
    for(let i=0;i<allPromptedNumbers.length;i++){
        if (allPromptedNumbers[i] === pushNumber){
            doNumberPrompting = false
        }
    }

}
alert("That number has already been given.")

//document.getElementById("Ap03").innerHTML = "Program halted."
allPromptedNumbers.sort(function (a,b){return a-b})
for (let i=0;i<allPromptedNumbers.length;i++){
    console.log("2.05 log: "+allPromptedNumbers[i])
}