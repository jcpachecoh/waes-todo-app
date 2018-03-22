import { connect, Dispatch } from 'react-redux';
import {  TodoActions, setTodoPage } from '../actions/index';
import { TodoPagesHOC, TodoPagesProps } from '../Components/TodoPages';

type ConnectedDispatchProps = Pick<TodoPagesProps, 'setTodoPage'>;
export function mapDispatchToProps(dispatch: Dispatch<TodoActions>): ConnectedDispatchProps {
    return {
        setTodoPage: (pageId: string) => dispatch(setTodoPage(pageId))
    };
}

export default connect(null, mapDispatchToProps)(TodoPagesHOC);