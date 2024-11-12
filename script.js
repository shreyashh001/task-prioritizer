const tasks = [];

// Function to add a task
function addTask() {
    const name = document.getElementById("taskName").value.trim();
    const description = document.getElementById("taskDescription").value.trim();
    const priority = document.getElementById("taskPriority").value;

    if (name === "" || description === "" || !priority) {
        alert("Please enter task name, description, and select a priority.");
        return;
    }

    const task = { id: Date.now(), name, description, priority };
    tasks.push(task);

    document.getElementById("taskName").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskPriority").value = "Today";

    displayTasks();
}

// Function to display tasks sorted by priority
function displayTasks() {
    tasks.sort((a, b) => {
        const priorityOrder = { "Today": 1, "Tomorrow": 2, "Afterwards": 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    const taskList = document.getElementById("tasks");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const listItem = document.createElement("li");
        listItem.classList.add("task-item");

        listItem.innerHTML = `
            <span>${task.name} - ${task.description}</span>
            <span class="priority">Priority: ${task.priority}</span>
            <button onclick="removeTask(${task.id})">Remove</button>
        `;

        taskList.appendChild(listItem);
    });
}

// Function to remove a task by ID
function removeTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        displayTasks();
    }
}

// Function to toggle light/dark theme
function toggleTheme() {
    const body = document.body;
    const toggleButton = document.getElementById("theme-toggle");

    body.classList.toggle("dark-mode");

    // Update button text based on current mode
    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Switch to Light Mode";
    } else {
        toggleButton.textContent = "Switch to Dark Mode";
    }
}
