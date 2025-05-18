'use strict';
const names = ['John', 'Paul', 'Jones'];

for(let i=0;i<names.length;i++){
    let list = document.createElement("li")
    list.innerHTML = names[i]
    document.getElementById("target").appendChild(list)
}