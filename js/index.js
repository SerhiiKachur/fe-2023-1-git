"use sctrict";

const sectionContainer = document.getElementById("main-container");

const tasksContainer = document.createElement("ol");
sectionContainer.append(tasksContainer);
tasksContainer.classList.add("main-container");

const createBtn = document.createElement("button");
createBtn.textContent = "+";
sectionContainer.append(createBtn);
createBtn.classList.add("btn");

function createBtnPush() {
  const taskFromPrompt = prompt("Discribe your task");
  if(taskFromPrompt === ''){
    alert('You need to write something');
    return;
  }
  const newLi = document.createElement("li");
  tasksContainer.append(newLi);
  newLi.textContent = taskFromPrompt;
  newLi.classList.add("li-item");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.classList.add("delbtn");
  newLi.append(deleteBtn);
  function deleteTask() {
    tasksContainer.removeChild(newLi);
  }
  deleteBtn.addEventListener("click", deleteTask);
}

createBtn.addEventListener("click", createBtnPush);

tasksContainer.textContent = `Tap Green Button to create new task`;
