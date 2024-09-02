import { project } from "./project";
import "./style.css";

let projects = [new project("default")];
let currProject = projects[0];

document.addEventListener("DOMContentLoaded",()=>{
    let newTaskBtn = document.getElementById("newTask");
    let newTaskForm = document.querySelector("dialog");
    newTaskBtn.addEventListener("click", ()=>{
        newTaskForm.showModal();
    });
});