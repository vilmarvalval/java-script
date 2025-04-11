let inputs = [];
for (let i = 0; i<3;i++){
    inputs.push(prompt(`Enter input ${i+1}:`));
}
console.log(inputs);
let numbers = inputs.map(function (x){
    return parseFloat(x)
});
console.log(numbers);

const sum = (arr) =>
    arr.reduce((acc,val) => acc + val, 0);
const product = (arr) =>
    arr.reduce((acc,val) => acc * val, 1);
const average = (arr) =>
    sum(arr) / arr.length;

document.getElementById("p2").innerHTML= 'Given numbers: '+inputs.toString();
document.getElementById("p3").innerHTML= 'Their sum: '+sum(numbers);
document.getElementById("p4").innerHTML= 'Their product: '+product(numbers);
document.getElementById("p5").innerHTML= 'Their average: '+average(numbers);
