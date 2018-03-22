import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { todoReducer } from './todos';
import { userReducer } from './user';

const rootReducer = combineReducers({
    todoReducer,
    userReducer,
    routerReducer
});

export default rootReducer;