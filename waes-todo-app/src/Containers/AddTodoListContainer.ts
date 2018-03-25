import { connect, Dispatch } from 'react-redux';
import { TodoListModal, TodoListModalProps } from '../Components/TodoListModal';
import { TodoActions, setShowAddList, changeTodoListInput } from '../actions/index';
import { StoreState } from '../Models/StoreState';

export function mapStateToProps(state: StoreState) {
    return {
        showAddList: state.todoReducer.showAddList,
        todoList: state.todoReducer.todoList,
        userId: state.userReducer.user.id
    };
}

type ConnectedDispatchProps = Pick<TodoListModalProps, 'changeTodoListInput' | 'setShowAddList'>;
export function mapDispatchToProps(dispatch: Dispatch<TodoActions>): ConnectedDispatchProps {
    return {
        changeTodoListInput: (listname: string) => dispatch(changeTodoListInput(listname)),
        setShowAddList: (flag: boolean) => dispatch(setShowAddList(flag))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListModal);