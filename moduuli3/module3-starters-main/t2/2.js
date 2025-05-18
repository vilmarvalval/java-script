let itemList = ["First item","Second item","Third item"]

for(let i=0;i<itemList.length;i++){
    let list = document.createElement("li")
    list.innerHTML = itemList[i]
    if (i === 1){
        list.classList.add('my-item')
    }
    document.getElementById("target").appendChild(list)
}