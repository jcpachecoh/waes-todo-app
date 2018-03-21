import { Task } from './Models/Task';

export interface Action {
    type: string;
    payload?: Task;
}

export interface ActionBoolean {
    type: string;
    payload?: boolean;
}

export interface ActionString {
    type: string;
    payload?: string;
}