'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for(let i=0;i<students.length;i++){
    let option = document.createElement("option")
  console.log(students[i])
    option.innerHTML = students[i].name
    option.value = students[i].id
    document.getElementById("target").appendChild(option)
}