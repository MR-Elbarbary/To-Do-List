import { createProjectBtn, project, renderTasks } from "./project";
import "./style.css";
import { createTask, editTask, task } from "./task";

let projects = [];
let currProject;

document.addEventListener("DOMContentLoaded",()=>{
    let defaultProj = new project("default");
    currProject = defaultProj;
    let defaultBtn = createProjectBtn(defaultProj, 0, (newProject)=> currProject = newProject);
    projects.push(defaultProj);
    let newTaskBtn = document.getElementById("newTask");
    let leftPart = document.querySelector(".leftPart");
    leftPart.appendChild(defaultBtn);
    let newTaskForm = document.getElementById("createTask");
    let tasks = document.querySelector(".tasks");
    let newTask = document.getElementById("submit");
    let newProjectBtn = document.getElementById("create");
    let editBtn = document.getElementById("edit");
    let editDialog = document.getElementById("editTask");

    newProjectBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        let name = document.getElementById("newProject").value;
        let newProject = new project(name);
        let btn = createProjectBtn(newProject, projects.length, (newProject)=> currProject = newProject);
        leftPart.appendChild(btn);
        projects.push(newProject);
    });
    newTaskBtn.addEventListener("click", ()=>{
        newTaskForm.showModal();
    });
    newTask.addEventListener("click",(e)=>{
        e.preventDefault();
        newTaskForm.close();
        let task = createTaskObj();
        currProject.addTask(task);
        tasks.appendChild(createTask(task, currProject));
    });
    editBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        let taskIndex = editBtn.getAttribute("data-index");
        editTask(currProject.tasks[taskIndex]);
        editDialog.close();
        renderTasks(currProject);
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
