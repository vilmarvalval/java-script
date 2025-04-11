//Make a program that asks the user for the number of dice and the sum of the eye numbers of interest to the user.
//The purpose of your program is now to find out with what probability the number of dice given
//by the user produces the sum of the number of eyes given by the user.
//For example, if the user enters 3 as the number of dice and 17 as the sum of the eyes,
//the program calculates the probability that the sum of the three dice's eye numbers is 17. (5p)
// - Solve the problem by simulating: Have the program roll a given number of dice in a for-loop (e.g. 10,000 times) and calculate what proportion of the repetitions produced the sum of eye numbers of interest to the user.
// - Print the result on the HTML document:
// - Probability to get sum 7 with 2 dice is 15.64%

// you can limit the number of decimals with toFixed()
// test values:
// - 2 dice, sum 7, probability is about 15-17%
// - 3 dice, sum 15, probability is about 5%

let diceEyeAmount = parseInt( prompt("Insert number of dice:"))
let diceEyeTarget = parseInt( prompt("Insert target sum of eye numbers:"))
let diceEyeSideCount = 6
let diceEyeTargetHit = 0
for (let i=0;i<1000;i++){
    let diceEyeResult = 0
    for (let j=0;j<diceEyeAmount;j++) {
        let diceEyeAdd = Math.ceil(Math.random()*diceEyeSideCount)
        //console.log('rolled: '+diceEyeAdd)
        diceEyeResult = diceEyeResult + diceEyeAdd
        //console.log('added up to '+diceEyeResult)
        //console.log('roll '+j)
    }
    //console.log('Finished rolling, result: '+diceEyeResult)
    if (diceEyeResult === diceEyeTarget) {
        diceEyeTargetHit += 1
        //console.log('Target number hit')
    }
}

//console.log(diceEyeTargetHit/10+'%')
document.getElementById("p11").innerHTML= 'Probability of dice adding up to '+diceEyeTarget+' is about '+diceEyeTargetHit/10+'%'