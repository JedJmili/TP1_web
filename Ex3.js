document.addEventListener("DOMContentLoaded", function() {
    const taskNameInput = document.getElementById("taskName");
    const taskContentInput = document.getElementById("taskContent");
    const addTodoButton = document.getElementById("addTodo");
    const todoList = document.getElementById("todo-list");
    //garantir page HTML chargé

    // Fonction pour ajouter une tache
    function addTask() {
        const taskName = taskNameInput.value.trim(); //remove whitespace 
        const taskContent = taskContentInput.value.trim();//remove whitespace 
    
        if (taskName === "" || taskContent === "") {
            alert("Veuillez remplir les champs.");
            return;
        }
    
        // Create list item
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    
        // Create text span (task details)
        const taskSpan = document.createElement("span");
        taskSpan.textContent = `${taskName} : ${taskContent}`;  // Safe from XSS
    
        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-light", "btn-sm", "delete-btn");
    
        // Create trash icon
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("bi", "bi-trash3");
        deleteIcon.style.color = "gray";
    
        // Append icon to button
        deleteButton.appendChild(deleteIcon);
    
        // Append elements to list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
    
        // Append task to the list
        todoList.appendChild(listItem);
    
        // Clear input fields
        taskNameInput.value = "";
        taskContentInput.value = "";
    
        // Add event listener for delete action
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });
    }
    

    // Add event listner for add action
    addTodoButton.addEventListener("click", addTask);
    // Add event listner for keyboard enter press
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
});
