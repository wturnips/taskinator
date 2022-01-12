var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemElememnt = document.createElement("li");
    listItemElememnt.className = "task-item";
    listItemElememnt.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemElememnt);
};

buttonEl.addEventListener("click", createTaskHandler);