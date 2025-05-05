let participantCount = prompt("Give number of participants")
let addParticipant = ""
let participants = []
for (let i = 0; i<participantCount;i++){
    addParticipant = prompt(`Give name of participant ${i+1}:`)
    participants.push(addParticipant)
}
participants.sort()

let list = document.getElementById("Ap01")
for (let i = 0;i<participants.length;i++){
    let li = document.createElement('li')
    li.innerText = participants[i]
    list.appendChild(li)
}