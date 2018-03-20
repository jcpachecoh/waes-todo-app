export class Task {
    id: number;
    task: string;
    done: boolean;

    constructor() {
        this.task = '';
        this.done = false;
    }
}