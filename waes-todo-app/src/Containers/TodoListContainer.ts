import { connect, Dispatch } from 'react-redux';
import { TodoActions, showAll, showActive, showCompleted, setAsComplete } from '../actions/index';
import { TodoListHOC, TodoListProps } from '../Components/TodoList';
import { StoreState } from '../Models/StoreState';

export function mapStateToProps(state: StoreState) {
    return {
        pageId: state.todoReducer.pageId,
        showActiveFlag: state.todoReducer.showActiveFlag,
        user: state.userReducer.user
    };
}

type ConnectedDispatchProps = Pick<TodoListProps, 'showAll' | 'showActive' | 'showCompleted' | 'setAsComplete'>;
export function mapDispatchToProps(dispatch: Dispatch<TodoActions>): ConnectedDispatchProps {
    return {
        showAll: () => dispatch(showAll()),
        showActive: () => dispatch(showActive()),
        showCompleted: () => dispatch(showCompleted()),
        setAsComplete: (id: string, done: boolean) => dispatch(setAsComplete(id, done))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListHOC);