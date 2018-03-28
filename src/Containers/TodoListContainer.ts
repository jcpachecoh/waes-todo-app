import { connect, Dispatch } from 'react-redux';
import { TodoActions, showAll, showActive, showCompleted, setAsComplete, setShowModalConfirm, updateTask, setTask } from '../actions/index';
import { TodoList, TodoListProps } from '../Components/TodoList';
import { StoreState } from '../Models/StoreState';
import { Task } from '../Models/Task';

export function mapStateToProps(state: StoreState) {
    return {
        pageId: state.todoReducer.pageId,
        showActiveFlag: state.todoReducer.showActiveFlag,
        user: state.userReducer.user,
        showConfirmModal: state.todoReducer.showConfirmModal
    };
}

type ConnectedDispatchProps = Pick<TodoListProps, 'showAll' |
    'showActive' |
    'showCompleted' |
    'setAsComplete' |
    'setShowModalConfirm' | 
    'updateTask' |
    'setTask'>;
export function mapDispatchToProps(dispatch: Dispatch<TodoActions>): ConnectedDispatchProps {
    return {
        showAll: () => dispatch(showAll()),
        showActive: () => dispatch(showActive()),
        showCompleted: () => dispatch(showCompleted()),
        setAsComplete: (id: string, done: boolean) => dispatch(setAsComplete(id, done)),
        setShowModalConfirm: (flag: boolean) => dispatch(setShowModalConfirm(flag)),
        updateTask: (task: Task) => dispatch(updateTask(task)),
        setTask: (task: Task) => dispatch(setTask(task))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);