import { Action, ActionBoolean, ActionString } from '../Action';
import { Task } from '../Models/Task';
import { request } from 'graphql-request';
import { queryUpdateTask } from '../querys/index';

export const ADD_TODO = 'AddTodo';
export type ADD_TODO = typeof ADD_TODO;
export const CHANGE_TODO_TASK_INPUT = 'ChangeTodoTaskInput';
export type CHANGE_TODO_TASK_INPUT = typeof CHANGE_TODO_TASK_INPUT;
export const DELETE_TODO = 'DeleteTodo';
export type DELETE_TODO = typeof DELETE_TODO;
export const SHOW_ALL = 'ShowAll';
export type SHOW_ALL = typeof SHOW_ALL;
export const SHOW_ACTIVE = 'ShowActive';
export type SHOW_ACTIVE = typeof SHOW_ACTIVE;
export const SHOW_COMPLETED = 'ShowCompleted';
export type SHOW_COMPLETED = typeof SHOW_COMPLETED;
export const SET_SHOW_MODAL_TASK = 'SetShowModalTask';
export type SET_SHOW_MODAL_TASK = typeof SET_SHOW_MODAL_TASK;
export const SET_TODO_PAGE = 'SetTodoPage';
export type SET_TODO_PAGE = typeof SET_TODO_PAGE;

export class AddTodo implements Action {
    type: ADD_TODO;
    payload: Task;
}

export function addTodo(task: Task): AddTodo {
    return {
        type: ADD_TODO,
        payload: task
    };
}

export class DeleteTodo implements Action {
    type: DELETE_TODO;
    payload: Task;
}

export function deleteTodo(task: Task): DeleteTodo {
    return {
        type: DELETE_TODO,
        payload: task
    };
}

export function setAsComplete(taskId: string, done: boolean) {
    return (dispatch: any, getState: any) => {
        let variables = {
            id: taskId,
            done: done
        };

        request('https://api.graph.cool/simple/v1/cjeujoqgm10rw0151kql505uu', queryUpdateTask, variables)
            .then((data) => () => console.log(data));
    };
}

export class ShowAll implements Action {
    type: SHOW_ALL;
}

export function showAll(): ShowAll {
    return {
        type: SHOW_ALL
    };
}

export class ShowActive implements Action {
    type: SHOW_ACTIVE;
}

export function showActive(): ShowActive {
    return {
        type: SHOW_ACTIVE
    };
}

export class ShowCompleted implements Action {
    type: SHOW_COMPLETED;
}

export function showCompleted(): ShowCompleted {
    return {
        type: SHOW_COMPLETED
    };
}

export class ChangeTodoTaskInput implements ActionString {
    type: CHANGE_TODO_TASK_INPUT;
    payload: string;
}

export function changeTodoTaskInput(task: string): ChangeTodoTaskInput {
    return {
        type: CHANGE_TODO_TASK_INPUT,
        payload: task
    };
}

export class SetShowModalTask implements ActionBoolean {
    type: SET_SHOW_MODAL_TASK;
    payload: boolean;
}

export function setShowModalTask(flag: boolean): SetShowModalTask {
    return {
        type: SET_SHOW_MODAL_TASK,
        payload: flag
    };
}

export class SetTodoPage implements ActionString {
    type: SET_TODO_PAGE;
    payload: string;
}

export function setTodoPage(pageId: string): SetTodoPage {
    return {
        type: SET_TODO_PAGE,
        payload: pageId
    };
}

export type TodoActions =
    AddTodo |
    DeleteTodo |
    ShowAll |
    ShowActive |
    ShowCompleted |
    ChangeTodoTaskInput |
    SetShowModalTask |
    SetTodoPage;
