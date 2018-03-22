import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../Models/StoreState';
import { LoginProps, Login } from '../Components/Login';
import { userActions, handleUsername, handlePassword } from '../actions/userActions';

export function mapStateToProps(state: StoreState) {
    return {
        user: state.userReducer.user
    };
}

type ConnectedDispatchProps = Pick<LoginProps, 'handleUsername' | 'handlePassword'>;
export function mapDispatchToProps(dispatch: Dispatch<userActions>): ConnectedDispatchProps {
    return {
        handleUsername: (username: string) => dispatch(handleUsername(username)),
        handlePassword: (password: string) => dispatch(handlePassword(password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);