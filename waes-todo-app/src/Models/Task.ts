export class Task {
    id: string;
    task: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor() {
        this.task = '';
        this.done = false;
    }
}

export class TaskGQVariables {
    done: boolean;

    constructor() {
        this.done = false;
    }
}