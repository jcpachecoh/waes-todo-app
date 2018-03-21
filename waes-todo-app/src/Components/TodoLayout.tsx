import * as React from 'react';
import '../App.css';
import { Row, Col } from 'react-bootstrap';
import TaskModalContainer from '../Containers/TaskModalContainer';
import TodoListContainer from '../Containers/TodoListContainer';

class TodoLayout extends React.Component {
    render() {
        return (
            <div className="content">
                <Row >
                    <Col sm={2}>
                        sdiffuidfiud
                        </Col>
                    <Col sm={10}>
                        <TaskModalContainer />
                        <code>&lt;{'Col xs={6} md={4}'} /">">&gt;</code>
                        <TodoListContainer />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TodoLayout;