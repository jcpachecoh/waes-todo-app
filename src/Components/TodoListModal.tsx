
import * as React from 'react';
import '../App.css';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { request } from 'graphql-request';
import { queryCreateTodoList } from '../querys/index';
import { graphcoolEndpoint } from '../constants/index';
import { TodoList } from '../Models/TodoList';

export interface TodoListModalProps {
    showAddList: boolean;
    todoList: TodoList;
    changeTodoListInput: Function;
    setShowAddList: Function;
    userId: string;
    refresh: Function;
}

interface TodoListModalState {
    value: string;
}

export class TodoListModal extends React.Component<TodoListModalProps, TodoListModalState> {
    constructor(props: TodoListModalProps) {
        super(props);
        this.saveList = this.saveList.bind(this);
    }

    getValidationState() {
        const length = this.props.todoList.listname.length;
        if (length > 10) {
            return 'success';
        } else if (length > 5) {
            return 'warning';
        } else if (length > 0) {
            return 'error';
        }
        return null;
    }

    saveList() {
        const variables = {
            listname: this.props.todoList.listname,
            authorId: this.props.userId
        };

        console.log(variables);

        request(graphcoolEndpoint, queryCreateTodoList, variables)
            .then((data) => {
                this.props.setShowAddList(false);
                this.props.refresh();
            });
    }

    render() {
        return (
            <div className="static-modal">
                <Modal show={this.props.showAddList} onHide={() => this.props.setShowAddList(false)}>
                    <Modal.Header closeButton={true}>
                        <Modal.Title>Add Todo List </Modal.Title>
                    </Modal.Header>

                    <Modal.Body> <form>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                        >
                            <ControlLabel>List Name</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter text"
                                value={this.props.todoList.listname}
                                onChange={(e: any) => this.props.changeTodoListInput(e.target.value)}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                    </form></Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => this.props.setShowAddList(false)}>Close</Button>
                            <Button bsStyle="primary" onClick={() => this.saveList()}>Add Task</Button>
                      
                    </Modal.Footer>
                </Modal >
            </div >
        );
    }
}