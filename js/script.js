let masterTodoList = [];
let addItemsBtn = document.getElementById("addItemsBtn");
let inputItems = document.getElementById("inputItems");
let allListArea = document.getElementById("allListArea")


//Function

let callToDo = () => {
    let tasks = {
        text: inputItems.value,
        isDone: false
    }
    masterTodoList.push(tasks);
    allListArea.innerHTML = tasks.text;
    update();   
}

let update = () => {
    let html = "";
    for (i=0; i < masterTodoList.length;i++) {
        html += `<li>${masterTodoList[i].text} <a style=" text-decoration: none;" href='#' onclick='remove(${i})'>x</a><a style=" text-decoration: none;" href='#' id="toggleBtn" onclick='toggleDone(${i})'>Toggle</a></li>\n`;}
    allListArea.innerHTML = html;
    inputItems.value = "";

}

let remove = (item,index) => {
    masterTodoList.splice(index,1);
    update();
}

let toggleDone = (i) => {
    if (masterTodoList[i].isDone===true){
        document.getElementById("toggleBtn").innerHTML = `Undo Mark Done`;
    } else if (masterTodoList[i].isDone===false){
        document.getElementById("toggleBtn").innerHTML = `Mark Done`;
    }
    masterTodoList[i].isDone = !(masterTodoList[i].isDone);
    
}



//Event
addItemsBtn.addEventListener("click",callToDo)


