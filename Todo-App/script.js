const inputBox = document.getElementById("input-box");
const listItem = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Please type something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listItem.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
        saveData(); // Call saveData after adding the task
    }
    inputBox.value = "";
}

listItem.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData(); // Call saveData after any changes to the list
}, false);

function saveData() {
    // Get all list items
    const tasks = listItem.getElementsByTagName("li");
    const taskData = [];
    
    // Iterate over list items and save their content
    for (let task of tasks) {
        taskData.push(task.innerHTML);
    }
    
    // Store the task data in localStorage
    localStorage.setItem("tasks", JSON.stringify(taskData));
}

function showData() {
    // Retrieve task data from localStorage
    const savedData = JSON.parse(localStorage.getItem("tasks"));
    
    if (savedData) {
        // Clear existing list items
        listItem.innerHTML = '';
        
        // Add saved tasks to the list
        for (let task of savedData) {
            let li = document.createElement("li");
            li.innerHTML = task;
            listItem.appendChild(li);
            
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
    }
}

// Call showData() to display saved tasks when the page loads
showData();



/*const inputBox= document.getElementById("input-box");
const ListItem= document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("Please type something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML= inputBox.value;
        ListItem.appendChild(li);
        let Span=document.createElement("span");
        Span.innerHTML= "\u00d7";
        li.appendChild(Span);
    }
    inputBox.value= "";
    saveData();

}

ListItem.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",ListItem,innerHTML);

}

function showData(){
    ListItem.innerHTML=localStorage.getItem("data");
}
showData();
*/