import { createTask } from "./task";

export class project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    deleteTask(index){
        this.tasks.splice(index, 1);
    }
}

export function createProjectBtn(project, index, updateCurrProject) {
    let projectBtn = document.createElement("button");
    projectBtn.textContent = project.name;
    projectBtn.classList.add("project");
    projectBtn.setAttribute("value", index);
    projectBtn.addEventListener("click", ()=>{
        let title = document.querySelector(".heading h1");
        title.textContent = project.name;
        renderTasks(project);
        updateCurrProject(project);
    });
    return projectBtn
}

export function renderTasks(project) {
    let tasks = document.querySelector(".tasks");
        tasks.innerHTML = "";
        project.tasks.forEach(task => {
            tasks.appendChild(createTask(task, project));
        });
}