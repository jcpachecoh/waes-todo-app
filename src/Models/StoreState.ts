import { Task } from './Task';
import { User } from './User';
import { TodoList } from './TodoList';

export interface TodoReducer {
    task: Task;
    showModalTask: boolean;
    pageId: string;
    showActiveFlag: boolean;
    showConfirmModal: boolean;
    updateFlag: boolean;
    showAddList: boolean;
    todoList: TodoList;
}

export interface UserReducer {
    user: User;
}

export interface StoreState {
    todoReducer: TodoReducer;
    userReducer: UserReducer;
}