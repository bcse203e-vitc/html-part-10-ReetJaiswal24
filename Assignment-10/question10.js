const addButton = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.addEventListener("click", function() {
        taskList.removeChild(li);
    });
    li.appendChild(taskSpan);
    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = "";
}

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
