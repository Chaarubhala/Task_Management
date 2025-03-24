# Task Management Application

A simple and intuitive Task Management Application built using **HTML**, **CSS**, and **JavaScript**. This application allows users to add, edit, delete, and view tasks. It also includes features like filtering tasks by status (completed/pending).

## Features

1. **Add Task**:
   - Users can input a task name and description.
   - Tasks are saved to local storage and displayed in the task list.

2. **View Tasks**:
   - Displays a list of all tasks with their details.
   - Completed tasks are highlighted for easy identification.

3. **Edit Task**:
   - Users can edit the name of an existing task.

4. **Delete Task**:
   - Users can remove a task from the list.

5. **Task Status**:
   - Users can mark tasks as completed or pending.

6. **Filter Tasks**:
   - Users can filter tasks based on their status (`All`, `Pending`, or `Completed`).

7. **Persistent Storage**:
   - Tasks are saved in the browser's local storage, so they persist even after refreshing the page.


## How It Was Done

### **HTML Structure**
- The application is divided into two main sections:
  - **Sidebar**: Contains the task input form and filter buttons.
  - **Main Content**: Displays the list of tasks.
- Input fields and buttons are used to interact with the application.

### **CSS Styling**
- A modern and professional color scheme is used:
  - **Dark Blue (`#00296b`)**: Background color for the app container and padded space.
  - **Bright Blue (`#00509d`)**: Background color for the sidebar and task list.
  - **White (`#ffffff`)**: Text and button colors for contrast.
- The layout is designed to be clean and user-friendly, with clear padding and spacing between elements.

### **JavaScript Functionality**
- **Task Class**:
  - Represents a task with properties: `id`, `name`, `description`, and `completed`.
- **Local Storage**:
  - Tasks are saved to and retrieved from the browser's local storage.
- **Event Listeners**:
  - Handle user interactions like adding, editing, deleting, and filtering tasks.
- **Dynamic Rendering**:
  - The task list is dynamically updated based on user actions.

---

## How to Run the Application

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/chaarubhala/Task_Management.git
   cd Task_Management

   Deployed Page link : https://chaarubhala.github.io/Task_Management/
