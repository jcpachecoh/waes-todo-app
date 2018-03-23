import { HANDLE_USERNAME, userActions, HANDLE_PASSWORD, SET_USER_ID } from '../actions/userActions';

const newObject = (state: any, newData: any) => Object.assign({}, state, newData);

export const defaultUser = {
    user: {
        id: '',
        username: '',
        password: '',
    }
};

export const userReducer = (state = defaultUser, action: userActions) => {
    switch (action.type) {
        case HANDLE_USERNAME:
            return newObject(state, {
                user: { username: action.payload, password: state.user.password }
            });
        case HANDLE_PASSWORD:
            return newObject(state, {
                user: { username: state.user.username, password: action.payload }
            });
        case SET_USER_ID:
            return newObject(state, {
                user: { id: action.payload, username: state.user.username, password: state.user.password }
            });
        default:
            return state;

    }
};