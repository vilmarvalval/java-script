let testPrimeNumber = prompt("Enter a number to test for prime: ")

if (testPrimeNumber > 1){
    for (let i = 2; i<(testPrimeNumber/2)+1;i++){
        if (testPrimeNumber % i === 0){
            document.getElementById("p10").innerHTML="Luku "+testPrimeNumber+" ei ole alkuluku."
        } else {
            document.getElementById("p10").innerHTML="Luku "+testPrimeNumber+" on alkuluku."
        }
    }
} else {
    document.getElementById("p10").innerHTML="Luku "+testPrimeNumber+" ei ole alkuluku."
}