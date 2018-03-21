import { TodoActions, ADD_TODO, CHANGE_TODO_TASK_INPUT, SET_SHOW_MODAL_TASK } from '../actions/index';
import { Task } from '../Models/Task';

const newObject = (state: any, newData: any) => Object.assign({}, state, newData);

var todosInitial: Task[] = [];

export const defaultTodos = {
    todo: {
        id: 0,
        task: '',
        done: false,
    },
    todos: todosInitial,
    showModalTask: false
};

export const todoReducer = (state = defaultTodos, action: TodoActions) => {
    switch (action.type) {
        case ADD_TODO:
            let todos: Task[] = [];
            todos = state.todos.slice();

            return newObject(state, {
                todos: todos
            });
        case CHANGE_TODO_TASK_INPUT:

            return newObject(state, {
                task: { task: action.payload }
            });
        case SET_SHOW_MODAL_TASK:
            return newObject(state, {
                showModalTask: action.payload
            });
        case CHANGE_TODO_TASK_INPUT:

            return newObject(state, {
                task: { task: action.payload }
            });
        default:
            return state;
    }
};