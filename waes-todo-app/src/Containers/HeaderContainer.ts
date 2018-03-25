import { connect, Dispatch } from 'react-redux';
import { TodoActions, setShowModalTask, showAll, showActive, showCompleted, setShowAddList } from '../actions/index';
import { HeaderProps } from '../Components/Header';
import { Header } from '../Components/Header';

type ConnectedDispatchProps = Pick<HeaderProps, 'setShowModalTask' |
 'showAll' | 
 'showActive' | 
 'showCompleted' |
 'setShowAddList'>;
export function mapDispatchToProps(dispatch: Dispatch<TodoActions>): ConnectedDispatchProps {
    return {
        showAll: () => dispatch(showAll()),
        showActive: () => dispatch(showActive()),
        showCompleted: () => dispatch(showCompleted()),
        setShowModalTask: (flag: boolean) => dispatch(setShowModalTask(flag)),
        setShowAddList: (flag: boolean) => dispatch(setShowAddList(flag))
    };
}

export default connect(null, mapDispatchToProps)(Header);