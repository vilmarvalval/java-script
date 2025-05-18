let itemList = ["First item","Second item","Third item"]

for(let i=0;i<itemList.length;i++){
    let list = document.createElement("li")
    list.innerHTML = itemList[i]
    document.getElementById("target").appendChild(list)
}

document.getElementById("target").classList.add("my-list")