export class Task {
    id: number;
    task: string;
    done: boolean;

    constructor() {
        this.task = '';
        this.done = false;
    }
}

export class TaskGQVariables {
    orderBy: string;

    constructor() {
        this.orderBy = 'createdAt_ASC';
    }
}