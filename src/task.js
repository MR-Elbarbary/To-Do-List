import { renderTasks } from "./project";

export class task {
    constructor(title, description, note, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.note = note;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export function createTask(task, project){
    let index = project.tasks.length -1;
    let taskDiv = document.createElement('div');
    taskDiv.classList.add("task");
    taskDiv.setAttribute("data-index", index);
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
    showBtn.addEventListener("click",()=>{
        let dialog = createShowTask(task)
        dialog.showModal();
    })
    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener("click", ()=>{
        project.deleteTask(index)
        renderTasks(project)
    });

    div2.appendChild(showBtn);
    div2.appendChild(editBtn);
    div2.appendChild(deleteBtn);
    //add a function for the btns

    taskDiv.appendChild(div1);
    taskDiv.appendChild(div2);
    return taskDiv
}

function createShowTask(task) {
    let dialog = document.querySelector(".showTask");
    dialog.innerHTML = ""
    let title = document.createElement('h1');
    title.textContent = task.title;
    let description = document.createElement('p');
    description.textContent = "Description: "+task.description;
    let note = document.createElement('p');
    note.textContent = "Note: "+task.note;
    let priority = document.createElement("p");
    priority.textContent = "Priority: "+task.priority;
    let dueDate = document.createElement("p");
    dueDate.textContent = "dueDate: "+task.dueDate;

    dialog.appendChild(title);
    dialog.appendChild(description);
    dialog.appendChild(note);
    dialog.appendChild(priority);
    dialog.appendChild(dueDate);
    return dialog
}