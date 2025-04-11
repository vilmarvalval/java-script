let year =  parseFloat(prompt("Insert year: "))

if (year % 400 === 0 || year % 100 === 0 && year % 4 !== 0) {
    document.getElementById("p6").innerHTML = 'Year '+year+' is a leap year.';
} else {document.getElementById("p6").innerHTML = 'Year '+year+' is not a leap year.'}