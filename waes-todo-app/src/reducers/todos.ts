import { TodoActions, ADD_TODO } from '../actions/index';


const newObject = (state: any, newData: any) => Object.assign({}, state, newData);

export const defaultTodos = {
    todo: {
        id: 0,
        task: '',
        done: false,
    },
    saving: false,
    clientId: '',
    errorsMessages: { errorName: '', errorsUserDomains: '' },
    confirmModal: false,
    showModal: false,
    disableSaveBtn: true,
    stateConfirmModal: false
};



export const todoReducer = (state = defaultTodos, action: TodoActions) => {
    switch (action.type) {
        case ADD_TODO:
            return newObject(state,{
                todo: action.payload
            })

    }
}