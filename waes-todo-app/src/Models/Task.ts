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
    orderBy: string;
    done: boolean;

    constructor() {
        this.orderBy = 'createdAt_ASC';
        this.done = false;
    }
}