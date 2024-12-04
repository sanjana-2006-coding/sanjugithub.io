// Select elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Add event listeners to buttons
    taskItem.querySelector(".complete-btn").addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    taskItem.querySelector(".delete-btn").addEventListener("click", () => {
        taskItem.remove();
    });

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

// Add event listener to "Add Task" button
addTaskBtn.addEventListener("click", addTask);

// Add task on pressing Enter key
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
