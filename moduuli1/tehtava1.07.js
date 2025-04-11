let diceAmount = prompt('Insert number of dice.')
let diceRollAmount = prompt('Insert amount of rolls:')
let diceFaceCount = 6
let diceAddUp = 0

for (let i = 0; i < diceRollAmount; i++){
    for(let i = 0; i < diceAmount; i++){
        diceAddUp = diceAddUp + Math.floor(Math.random()*diceFaceCount)
    }
}
document.getElementById("p8").innerHTML = 'The '+diceAmount+' dice thrown '+diceRollAmount+' times add up to: '+diceAddUp