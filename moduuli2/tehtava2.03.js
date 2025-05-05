let sixDogs=[]
let addDog=""
for (let i = 0; i<6; i++){
    addDog = prompt("Give name of dog")
    sixDogs.push(addDog)
}

sixDogs.sort()
sixDogs.reverse()

let ULlist = document.getElementById("Ap02")
for (let i = 0; i<sixDogs.length; i++){
    let li = document.createElement("li")
    li.innerText=sixDogs[i]
    ULlist.appendChild(li)
}