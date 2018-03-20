import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { todoReducer } from './todos';

const rootReducer = combineReducers({
    todoReducer,
    routerReducer
});

export default rootReducer;