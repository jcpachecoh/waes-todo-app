import { Task } from './Task';

export interface TodoReducer {
    task: Task;
    showModalTask: boolean;
    todos: Task[];
}
export interface StoreState {
    todoReducer: TodoReducer;
}