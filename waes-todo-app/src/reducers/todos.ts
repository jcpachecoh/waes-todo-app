import { UPDATE_TASK, SET_TASK, SET_SHOW_ADD_LIST, CHANGE_TODO_LIST_INPUT } from '../actions/index';
import {
    TodoActions, CHANGE_TODO_TASK_INPUT, SET_SHOW_MODAL_TASK,
    SET_TODO_PAGE, SHOW_ACTIVE, SHOW_COMPLETED, SET_SHOW_MODAL_CONFIRM
} from '../actions/index';

const newObject = (state: any, newData: any) => Object.assign({}, state, newData);

export const defaultTodos = {
    task: {
        id: '',
        task: '',
        done: false,
    },
    pageId: 'cjevh01zwyu0w0148vql4vrck',
    showModalTask: false,
    showActiveFlag: false,
    showConfirmModal: false,
    updateFlag: false,
    showAddList: false,
    todoList: {
        id: '',
        listname: ''
    }
};

export const todoReducer = (state = defaultTodos, action: TodoActions) => {
    switch (action.type) {
        case CHANGE_TODO_TASK_INPUT:

            return newObject(state, {
                task: {
                    id: state.task.id,
                    task: action.payload
                }
            });

        case SET_SHOW_MODAL_TASK:
            return newObject(state, {
                showModalTask: action.payload,
                updateFlag: false,
                showConfirmModal: false,
                task: {
                    id: '',
                    task: '',
                    done: false,
                },
            });
        case CHANGE_TODO_TASK_INPUT:

            return newObject(state, {
                task: { task: { task: action.payload } }
            });
        case SET_TODO_PAGE:
            return newObject(state, {
                pageId: action.payload
            });

        case SHOW_ACTIVE:
            return newObject(state, {
                showActiveFlag: false
            });
        case SHOW_COMPLETED:
            return newObject(state, {
                showActiveFlag: true
            });
        case SET_SHOW_MODAL_CONFIRM:
            return newObject(state, {
                showConfirmModal: action.payload
            });
        case SET_SHOW_ADD_LIST:
            return newObject(state, {
                showAddList: action.payload
            });
        case UPDATE_TASK:
            return newObject(state, {
                task: action.payload,
                updateFlag: true,
                showModalTask: true,
                showConfirmModal: false
            });
        case SET_TASK:
            return newObject(state, {
                task: action.payload,
            });
        case CHANGE_TODO_LIST_INPUT:
            return newObject(state, {
                todoList: { listname: action.payload }
            });
        case SET_SHOW_ADD_LIST:
            debugger;
            return newObject(state, {
                showAddList: action.payload
            });
        default:
            return state;
    }
};