let masterTodoList = [];
let addItemsBtn = document.getElementById("addItemsBtn");
let inputItems = document.getElementById("inputItems");
let allListArea = document.getElementById("allListArea")
let doneListArea = document.getElementById("doneListArea")

//Function
let callToDo = () => {
    let tasks = {
        text: inputItems.value,
        isDone: false
    }
    masterTodoList.push(tasks);
    allListArea.innerHTML = tasks.text;
    update(masterTodoList,'all');   
}

let update = (array,to) => {
    let html = "";
    for (i=0; i < array.length;i++) {
        if (array[i].isDone===false){
            sentence= `<li>${array[i].text} <a style=" text-decoration: none;" href='#' onclick='remove(${i})'>x</a><a style=" text-decoration: none;" href='#' id="toggleBtn" onclick='toggleDone(${i})'>Done</a></li>\n`;}
            else if (array[i].isDone===true){
                sentence= `<li>${array[i].text} <a style=" text-decoration: none;" href='#' onclick='remove(${i})'>x</a><a style=" text-decoration: none;" href='#' id="toggleBtn" onclick='toggleDone(${i})'>UnDone</a></li>\n`
            }
    html+=sentence
    } 
    if (to === 'all') {
        allListArea.innerHTML = html;
    } else if (to === 'done') {
        doneListArea.innerHTML = html;
    }    
    inputItems.value = "";
}
let remove = (item,index) => {
    masterTodoList.splice(index,1);
    update(masterTodoList,'all');
}
let toggleDone = (i) => {

    masterTodoList[i].isDone = !(masterTodoList[i].isDone);

    updateDoneList();
    update(masterTodoList,'all');
}

let updateDoneList = () => {
    let doneList = masterTodoList.filter((item)=>{
       return item.isDone==true
    })
    console.log(doneList)
    update(doneList,'done');
}

//Event
addItemsBtn.addEventListener("click",callToDo)


