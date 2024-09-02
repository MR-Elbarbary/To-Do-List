export class project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    deleteTask(task){

    }
}