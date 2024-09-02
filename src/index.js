import { project } from "./project";
import "./style.css";
import { task } from "./task";

let projects = [];
let currProject;

document.addEventListener("DOMContentLoaded",()=>{
    let defaultBtn = new project("default");
    currProject = defaultBtn;
    createProjectBtn(defaultBtn, 0);
    projects.push(defaultBtn);
    let newTaskBtn = document.getElementById("newTask");
    let leftPart = document.getElementById("leftPart");
    let newTaskForm = document.querySelector("dialog");
    let tasks = document.querySelector(".tasks");
    let newTask = document.getElementById("submit");
    let newProjectBtn = document.getElementById("create");
    newProjectBtn.addEventListener("click", ()=>{
        let name = document.getElementById("newProject").value;
        let newProject = new project(name);
        createProjectBtn(newProject, projects.length);
        projects.push(newProject);
    });
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

function createProjectBtn(project, index) {
    let projectBtn = document.createElement("button");
    projectBtn.textContent = project.name;
    projectBtn.classList.add("project");
    projectBtn.setAttribute("value", index);
    projectBtn.addEventListener("click", ()=>{
        let tasks = document.querySelector(".tasks");
        tasks.innerHTML = "";
        project.tasks.forEach(task => {
            tasks.appendChild(createTask(task));
        });
        currProject = project;
    });
    let leftPart = document.querySelector(".leftPart");
    leftPart.appendChild(projectBtn);
}