import { connect, Dispatch } from 'react-redux';
import { TaskModal, TaskModalProps } from '../Components/TaskModal';
import { changeTodoTaskInput, addTodo, TodoActions, setShowModalTask } from '../actions/index';
import { Task } from '../Models/Task';
import { StoreState } from '../Models/StoreState';

export function mapStateToProps(state: StoreState) {
    return {
        task: state.todoReducer.task,
        showModalTask: state.todoReducer.showModalTask,
        updateFlag: state.todoReducer.updateFlag,
        pageId: state.todoReducer.pageId
    };
}

type ConnectedDispatchProps = Pick<TaskModalProps, 'changeTodoTaskInput' | 'addTodo' | 'setShowModalTask'>;
export function mapDispatchToProps(dispatch: Dispatch<TodoActions>): ConnectedDispatchProps {
    return {
        changeTodoTaskInput: (task: string) => dispatch(changeTodoTaskInput(task)),
        addTodo: (task: Task) => dispatch(addTodo(task)),
        setShowModalTask: (flag: boolean) => dispatch(setShowModalTask(flag))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);