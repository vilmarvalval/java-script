let askedNumbers = []
let askNumber

while (askNumber !==0){
    askNumber = parseFloat(prompt("Give a number"))
    askedNumbers.push(askNumber)
}

askedNumbers.sort(function (a,b){return b-a})

for (let i=0; i<askedNumbers.length;i++){
    console.log("2.04 log: "+askedNumbers[i])
}