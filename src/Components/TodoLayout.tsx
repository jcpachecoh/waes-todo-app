import * as React from 'react';
import '../css/app.css';
import { Row, Col } from 'react-bootstrap';
import TodoListContainer from '../Containers/TodoListContainer';
import TodoPageContainer from '../Containers/TodoPageContainer';
import HeaderContainer from '../Containers/HeaderContainer';

interface TodoLayoutProps {
    history: any;
}

class TodoLayout extends React.Component<TodoLayoutProps, {}> {
    componentDidMount() {
        let sessionId = localStorage.getItem('sessionItemId');
        if (!sessionId || sessionId === undefined) {
            this.props.history.replace('/');
        }
    }
    logOut() {
        this.props.history.replace('/');
        localStorage.setItem('sessionItemId', '');
    }
    render() {
        return (
            <div>
                <HeaderContainer logOut={() => this.logOut()} />
                <div className="content">
                    <Row >
                        <Col sm={2}>
                            <TodoPageContainer />
                        </Col>
                        <Col sm={10} >
                            <TodoListContainer />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default TodoLayout;