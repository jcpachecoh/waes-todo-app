import { Task } from './Task';
import { User } from './User';

export interface TodoReducer {
    task: Task;
    showModalTask: boolean;
    pageId: string;
    showActiveFlag: boolean;
}

export interface UserReducer {
    user: User;
}

export interface StoreState {
    todoReducer: TodoReducer;
    userReducer: UserReducer;
}