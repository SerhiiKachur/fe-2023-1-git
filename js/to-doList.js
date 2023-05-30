"use sctrict";

const sectionContainer = document.getElementById("main-container");
const newForm = document.createElement("form");
sectionContainer.append(newForm);
const input = document.createElement("input");
newForm.append(input);
input.setAttribute("name", "input");
const tasksContainer = document.createElement("ol");
sectionContainer.append(tasksContainer);
tasksContainer.classList.add("main-container");
tasksContainer.textContent = `My To-Do List`;
const createBtn = document.createElement("button");
createBtn.textContent = "Add Task";
newForm.append(createBtn);
createBtn.classList.add("btn");

function deleteTask(e) {
  e.target.parentElement.remove();
}

newForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { target: formElement } = e;
  const { elements } = formElement;
  console.dir(formElement);
  const taskFromInput = elements.input.value.trim();
  if (taskFromInput === "") {
    alert("You need to write something");
    return;
  }
  const newLi = document.createElement("li");
  tasksContainer.append(newLi);
  newLi.textContent = taskFromInput;
  newLi.classList.add("li-item");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.classList.add("delbtn");
  newLi.append(deleteBtn);
  deleteBtn.addEventListener("click", deleteTask);
  newForm.reset();
});
