import { Action } from '../Action';
import { Task } from '../Models/Task';

export const ADD_TODO = 'AddTodo';
export type ADD_TODO = typeof ADD_TODO;
export const SET_AS_COMPLETE = 'SetAsComplete';
export type SET_AS_COMPLETE = typeof SET_AS_COMPLETE;
export const DELETE_TODO = 'DeleteTodo';
export type DELETE_TODO = typeof DELETE_TODO;
export const SHOW_ALL = 'ShowAll';
export type SHOW_ALL = typeof SHOW_ALL;
export const SHOW_ACTIVE = 'ShowActive';
export type SHOW_ACTIVE = typeof SHOW_ACTIVE;
export const SHOW_COMPLETED = 'ShowCompleted';
export type SHOW_COMPLETED = typeof SHOW_COMPLETED;

export class AddTodo implements Action {
    type: ADD_TODO
    payload: Task
}

export function addTodo(task: Task): AddTodo {
    return {
        type: ADD_TODO,
        payload: task
    };
}

export class DeleteTodo implements Action {
    type: DELETE_TODO
    payload: Task
}

export function deleteTodo(task: Task): DeleteTodo {
    return {
        type: DELETE_TODO,
        payload: task
    };
}


export class SetAsComplete implements Action {
    type: SET_AS_COMPLETE
    payload: boolean
}

export function setAsComplete(done: boolean): SetAsComplete {
    return {
        type: SET_AS_COMPLETE,
        payload: done
    };
}

export class ShowAll implements Action {
    type: SHOW_ALL
}

export function showAll(): ShowAll {
    return {
        type: SHOW_ALL
    };
}

export class ShowActive implements Action {
    type: SHOW_ACTIVE
}

export function showActive(): ShowActive {
    return {
        type: SHOW_ACTIVE
    };
}

export class ShowCompleted implements Action {
    type: SHOW_COMPLETED
}

export function showCompleted(): ShowCompleted {
    return {
        type: SHOW_COMPLETED
    };
}

export type TodoActions =
    AddTodo |
    DeleteTodo |
    SetAsComplete |
    ShowAll |
    ShowActive |
    ShowCompleted;
