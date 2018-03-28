import { connect, Dispatch } from 'react-redux';
import { TodoActions, setTodoPage, setShowAddList } from '../actions/index';
import { TodoPages, TodoPagesProps } from '../Components/TodoPages';
import { StoreState } from '../Models/StoreState';

export function mapStateToProps(state: StoreState) {
    return {
        showAddList: state.todoReducer.showAddList,
    };
}

type ConnectedDispatchProps = Pick<TodoPagesProps, 'setTodoPage' | 'setShowAddList'>;
export function mapDispatchToProps(dispatch: Dispatch<TodoActions>): ConnectedDispatchProps {
    return {
        setTodoPage: (pageId: string) => dispatch(setTodoPage(pageId)),
        setShowAddList: (showAddList: boolean) => dispatch(setShowAddList(showAddList))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPages);