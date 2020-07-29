document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById("create-task-form");
  createTaskForm.addEventListener("submit", addNewTask);
});


const addNewTask = event => {
  //this is to preveent the default submit action 
  //this stopped me from getting the re-direction error
  event.preventDefault();
  //we get the new description element by id
  //then i created the li element and set its value to the textbox value
  const newTaskDescription = document.getElementById("new-task-description");
  const newListItem = document.createElement("li");
  newListItem.innerText = newTaskDescription.value;

  document.getElementById("tasks").appendChild(newListItem);
  event.target.reset();
};

