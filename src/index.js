import "./style.css";

document.addEventListener("DOMContentLoaded",()=>{
    let newTaskBtn = document.getElementById("newTask");
    let newTaskForm = document.querySelector("dialog");
    newTaskBtn.addEventListener("click", ()=>{
        newTaskForm.showModal();
    });
});