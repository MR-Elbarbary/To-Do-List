import { project } from "./project";
import "./style.css";
import { task } from "./task";

let projects = [new project("default")];
let currProject = projects[0];

document.addEventListener("DOMContentLoaded",()=>{
    let newTaskBtn = document.getElementById("newTask");
    let newTaskForm = document.querySelector("dialog");
    let tasks = document.querySelector(".tasks");
    let newTask = document.getElementById("submit");
    newTaskBtn.addEventListener("click", ()=>{
        newTaskForm.showModal();
    });
    newTask.addEventListener("click",()=>{
        let task = createTaskObj();
        currProject.addTask(task);
        tasks.appendChild(createTask(task));
    });
});

function createTaskObj(){
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let notes = document.getElementById("notes").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    return new task(title, description, notes, dueDate, priority);
}

function createTask(task){
    let taskDiv = document.createElement('div');
    taskDiv.classList.add("task");
    //taskDiv.setAttribute()
    let div1 = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.textContent = task.title;
    let p = document.createElement('p');
    p.textContent = task.dueDate;
    div1.appendChild(h2);
    div1.appendChild(p);
    let div2 = document.createElement('div');
    let showBtn = document.createElement("button");
    showBtn.textContent = "show";
    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    div2.appendChild(showBtn);
    div2.appendChild(editBtn);
    div2.appendChild(deleteBtn);
    //add a function for the btns

    taskDiv.appendChild(div1);
    taskDiv.appendChild(div2);
    return taskDiv
}