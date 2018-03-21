import { connect, Dispatch } from 'react-redux';
import { TodoActions, setShowModalTask } from '../actions/index';
import { HeaderProps } from '../Components/Header';
import { Header } from '../Components/Header';

type ConnectedDispatchProps = Pick<HeaderProps, 'setShowModalTask'>;
export function mapDispatchToProps(dispatch: Dispatch<TodoActions>): ConnectedDispatchProps {
    return {
        setShowModalTask: (flag: boolean) => dispatch(setShowModalTask(flag))
    };
}

export default connect(null, mapDispatchToProps)(Header);