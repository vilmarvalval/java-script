//Write a program that prompts the user for the start and end year.
//The program prints all leap years from the interval given by the user.
//Printing is done in an unordered list to the HTML document. (3p)

startingYear = parseInt(prompt("Input starting year:"))
endingYear = parseInt(prompt("Input ending year:"))
console.log("start "+startingYear+", end "+endingYear)
let leapYears = []
for (let i = startingYear; i <= endingYear; i++){
    if (i % 400 === 0 || (i % 100 !== 0 && i % 4 === 0) ) {
        leapYears.push(i)
    }
}
const leapYears2D = []
while (leapYears.length) leapYears2D.push(leapYears.splice(0,5));
let leapYearsString=''
console.log(leapYears2D)

//htmlstring = stringContainingNewLines.replace(/(\r\n|\n|\r)/gm, "<br>");

for (let i=0; i<leapYears2D.length;i++){
    let addArray=''
    addArray = leapYears2D[i] //.toString()
    console.log("log addArray "+addArray)
    leapYearsString = leapYearsString + addArray + '<br />'
    console.log("log leapYearsString "+leapYearsString)
}

document.getElementById("p9").innerHTML= "Leap years are: <br />"+leapYearsString.toString()