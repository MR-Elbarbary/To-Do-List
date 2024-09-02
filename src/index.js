import { createProjectBtn, project } from "./project";
import "./style.css";
import { createTask, task } from "./task";

let projects = [];
let currProject;

document.addEventListener("DOMContentLoaded",()=>{
    let defaultBtn = new project("default");
    currProject = defaultBtn;
    createProjectBtn(defaultBtn, 0);
    projects.push(defaultBtn);
    let newTaskBtn = document.getElementById("newTask");
    let leftPart = document.querySelector(".leftPart");
    let newTaskForm = document.getElementById("createTask");
    let tasks = document.querySelector(".tasks");
    let newTask = document.getElementById("submit");
    let newProjectBtn = document.getElementById("create");

    newProjectBtn.addEventListener("click", ()=>{
        let name = document.getElementById("newProject").value;
        let newProject = new project(name);
        let btn = createProjectBtn(newProject, projects.length, (newProject)=> currProject = newProject);
        leftPart.appendChild(btn);
        projects.push(newProject);
    });
    newTaskBtn.addEventListener("click", ()=>{
        newTaskForm.showModal();
    });
    newTask.addEventListener("click",()=>{
        let task = createTaskObj();
        currProject.addTask(task);
        tasks.appendChild(createTask(task, currProject));
        newTaskForm.close();
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
