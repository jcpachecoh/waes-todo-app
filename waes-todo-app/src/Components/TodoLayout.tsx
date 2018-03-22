import * as React from 'react';
import '../css/app.css';
import { Row, Col } from 'react-bootstrap';
import TaskModalContainer from '../Containers/TaskModalContainer';
import TodoListContainer from '../Containers/TodoListContainer';
import TodoPageContainer from '../Containers/TodoPageContainer';
import LoginContainer from '../Containers/LoginContainer';
import HeaderContainer from '../Containers/LoginContainer';

class TodoLayout extends React.Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <div className="content">
                    <Row >
                        <Col sm={2}>
                            <TodoPageContainer />
                        </Col>
                        <Col sm={10} >
                            <LoginContainer />
                            <TaskModalContainer />
                            <TodoListContainer />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default TodoLayout;