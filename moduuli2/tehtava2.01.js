const fiveNumbers = []
let addNumber = 0
for (let i = 0; i<5; i++) {
    addNumber = prompt(`Give number ${i+1}`)
    fiveNumbers.push(addNumber)
    }
console.log(fiveNumbers)

for(let i=0 ;i<5;i++){
    console.log(fiveNumbers[4-i])
}