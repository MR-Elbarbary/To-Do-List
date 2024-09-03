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
    let title = document.createElement('h2');
    title.textContent = task.title;
    let dueDate = document.createElement('p');
    dueDate.textContent = task.dueDate;
    div1.appendChild(title);
    div1.appendChild(dueDate);
    let div2 = document.createElement('div');
    let showBtn = document.createElement("button");
    showBtn.textContent = "show";
    showBtn.addEventListener("click",()=>{
        let dialog = createShowTask(task)
        dialog.showModal();
    })
    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.addEventListener("click", ()=>{
        let editDialog = document.getElementById("editTask");
        populate(task, index);
        editDialog.showModal();
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener("click", ()=>{
        project.deleteTask(index)
        renderTasks(project)
    });

    div2.appendChild(showBtn);
    div2.appendChild(editBtn);
    div2.appendChild(deleteBtn);

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

function populate(task, index) {
    let editBtn = document.getElementById("edit");
    let title = document.getElementById("eTitle");
    let description = document.getElementById("eDescription");
    let note = document.getElementById("eNotes");
    let dueDate = document.getElementById("eDueDate");
    let priority = document.getElementById("ePriority");
    title.value = task.title;
    description.value = task.description;
    note.value = task.textContent;
    dueDate.value = task.dueDate;
    priority.value = task.priority;
    editBtn.setAttribute("data-index", index);
}

export function editTask(task){
    let title = document.getElementById("eTitle");
    let description = document.getElementById("eDescription");
    let note = document.getElementById("eNotes");
    let dueDate = document.getElementById("eDueDate");
    let priority = document.getElementById("ePriority");
    task.title = title.value;
    task.description = description.value;
    task.note = note.value;
    task.dueDate = dueDate.value;
    task.priority = priority.value;
}