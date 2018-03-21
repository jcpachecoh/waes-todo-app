import { connect, Dispatch } from 'react-redux';
import {  TodoActions, showAll, showActive, showCompleted } from '../actions/index';
import { TodoListHOC, TodoListProps } from '../Components/TodoList';

type ConnectedDispatchProps = Pick<TodoListProps, 'showAll' | 'showActive' | 'showCompleted'>;
export function mapDispatchToProps(dispatch: Dispatch<TodoActions>): ConnectedDispatchProps {
    return {
        showAll: () => dispatch(showAll()),
        showActive: () => dispatch(showActive()),
        showCompleted: () => dispatch(showCompleted())
    };
}

export default connect(null, mapDispatchToProps)(TodoListHOC);