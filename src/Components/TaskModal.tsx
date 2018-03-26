
import * as React from 'react';
import '../App.css';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Task } from '../Models/Task';
import { request } from 'graphql-request';
import { queryCreateTask, queryUpdateTaskContent } from '../querys/index';
import { graphcoolEndpoint } from '../constants/index';

export interface TaskModalProps {
    showModalTask: boolean;
    task: Task;
    changeTodoTaskInput: Function;
    addTodo: Function;
    setShowModalTask: Function;
    pageId: string;
    refresh: Function;
    updateFlag: boolean;
}

interface TaskModalState {
    value: string;
}

export class TaskModal extends React.Component<TaskModalProps, TaskModalState> {
    constructor(props: TaskModalProps) {
        super(props);
        this.saveTask = this.saveTask.bind(this);
    }

    componentWillReceiveProps(nextProps: TaskModalProps) {
        console.log(nextProps);
    }

    getValidationState() {
        const length = this.props.task.task.length;
        if (length > 10) {
            return 'success';
        } else if (length > 5) {
            return 'warning';
        } else if (length > 0) {
            return 'error';
        }
        return null;
    }

    saveTask() {
        const variables = {
            task: this.props.task.task,
            todoListId: this.props.pageId
        };

        request(graphcoolEndpoint, queryCreateTask, variables)
            .then((data) => {
                this.props.setShowModalTask(false);
                this.props.refresh();
            });
    }

    updateTask() {
        const variables = {
            id: this.props.task.id,
            task: this.props.task.task,
            todoListId: this.props.pageId
        };

        console.log(variables);

        request(graphcoolEndpoint, queryUpdateTaskContent, variables)
            .then((data) => {
                this.props.setShowModalTask(false);
                this.props.refresh();
            });
    }
    render() {
        return (
            <div className="static-modal">
                <Modal show={this.props.showModalTask} onHide={() => this.props.setShowModalTask(false)}>
                    <Modal.Header closeButton={true}>
                        <Modal.Title>Add todo </Modal.Title>
                    </Modal.Header>

                    <Modal.Body> <form>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                        >
                            <ControlLabel>Task</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter text"
                                value={this.props.task.task}
                                onChange={(e: any) => this.props.changeTodoTaskInput(e.target.value)}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                    </form></Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => this.props.setShowModalTask(false)}>Close</Button>
                        {!this.props.updateFlag &&
                            <Button bsStyle="primary" onClick={() => this.saveTask()}>Add Task</Button>
                        }
                        {this.props.updateFlag &&
                            <Button bsStyle="primary" onClick={() => this.updateTask()}>Update Task</Button>
                        }
                    </Modal.Footer>
                </Modal >
            </div >
        );
    }
}