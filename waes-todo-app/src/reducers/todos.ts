import { TodoActions, CHANGE_TODO_TASK_INPUT, SET_SHOW_MODAL_TASK, SET_TODO_PAGE, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions/index';

const newObject = (state: any, newData: any) => Object.assign({}, state, newData);

export const defaultTodos = {
    task: {
        id: 0,
        task: '',
        done: false,
    },
    pageId: 'cjevh01zwyu0w0148vql4vrck',
    showModalTask: false,
    showActiveFlag: false
};

export const todoReducer = (state = defaultTodos, action: TodoActions) => {
    switch (action.type) {
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
        default:
            return state;
    }
};