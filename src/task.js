export class task {
    constructor(title, description, note, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.note = note;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export function createTask(task){
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