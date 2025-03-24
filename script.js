// script.js

// Array to store tasks
let tasks = [];

// Load tasks from local storage if they exist
if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

// Get references to HTML elements
const taskForm = document.getElementById('task-form'); // Form for adding tasks
const taskNameInput = document.getElementById('task-name'); // Input for task name
const taskDescriptionInput = document.getElementById('task-description'); // Input for task description
const taskList = document.getElementById('task-list'); // List to display tasks
const filterButtons = document.querySelectorAll('.filters button'); // Filter buttons

// Function to display tasks
function renderTasks(filter = 'all') {
  // Clear the task list
  taskList.innerHTML = '';

  // Loop through all tasks
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    // Apply filter
    if (filter === 'all' || (filter === 'completed' && task.completed) || (filter === 'pending' && !task.completed)) {
      // Create a new list item
      const li = document.createElement('li');
      li.className = task.completed ? 'completed' : ''; // Add 'completed' class if task is completed

      // Add task details to the list item
      li.innerHTML = `
        <div>
          <h3>${task.name}</h3> <!-- Task name -->
          <p>${task.description}</p> <!-- Task description -->
        </div>
        <div>
          <button onclick="toggleTaskStatus(${i})">${task.completed ? 'Undo' : 'Complete'}</button> <!-- Toggle status button -->
          <button onclick="deleteTask(${i})">Delete</button> <!-- Delete button -->
          <button onclick="editTask(${i})">Edit</button> <!-- Edit button -->
        </div>
      `;

      // Add the list item to the task list
      taskList.appendChild(li);
    }
  }
}

// Add a new task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from refreshing the page

  // Get the task name and description from the input fields
  const taskName = taskNameInput.value.trim();
  const taskDescription = taskDescriptionInput.value.trim();

  // Check if the task name is not empty
  if (taskName) {
    // Create a new task object
    const newTask = {
      id: Date.now(), // Unique ID for the task
      name: taskName, // Task name
      description: taskDescription, // Task description
      completed: false, // Task status (default: pending)
    };

    // Add the new task to the tasks array
    tasks.push(newTask);

    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Update the task list
    renderTasks();

    // Clear the form inputs
    taskForm.reset();
  } else {
    alert('Task name cannot be empty!'); // Show an alert if the task name is empty
  }
});

// Toggle task status (complete/pending)
function toggleTaskStatus(index) {
  // Toggle the completed status of the task
  tasks[index].completed = !tasks[index].completed;

  // Save updated tasks to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Update the task list
  renderTasks();
}

// Delete a task
function deleteTask(index) {
  // Remove the task from the tasks array
  tasks.splice(index, 1);

  // Save updated tasks to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Update the task list
  renderTasks();
}

// Edit a task
function editTask(index) {
  const task = tasks[index]; // Get the task to edit

  // Prompt for new task name and description
  const newName = prompt('Edit Task Name:', task.name);
  const newDescription = prompt('Edit Task Description:', task.description);

  // Update the task if the user provides new values
  if (newName !== null && newDescription !== null) {
    task.name = newName.trim(); // Update task name
    task.description = newDescription.trim(); // Update task description

    // Save updated tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Update the task list
    renderTasks();
  }
}

// Filter tasks based on status
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all filter buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    button.classList.add('active');

    // Get the filter type from the button's ID
    const filter = button.id.replace('filter-', '');

    // Render tasks based on the selected filter
    renderTasks(filter);
  });
});

// Initial render of tasks
renderTasks();