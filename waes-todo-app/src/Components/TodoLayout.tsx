import * as React from 'react';
import '../App.css';
import { Row, Col } from 'react-bootstrap';
import TaskModalContainer from '../Containers/TaskModalContainer';
import TodoListContainer from '../Containers/TodoListContainer';
import TodoPageContainer from '../Containers/TodoPageContainer';

class TodoLayout extends React.Component {
    render() {
        return (
            <div className="content">
                <Row >
                    <Col sm={2}>
                        <TodoPageContainer />
                    </Col>
                    <Col sm={10}>
                        <TaskModalContainer />
                        <TodoListContainer />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TodoLayout;