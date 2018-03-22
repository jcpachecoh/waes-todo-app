
import * as React from 'react';
import '../App.css';
import { Button, Modal, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { Task } from '../Models/Task';
import { request } from 'graphql-request';
import { queryCreateTask } from '../querys/index';

export interface TaskModalProps {
    showModalTask: boolean;
    task: Task;
    changeTodoTaskInput: Function;
    addTodo: Function;
    setShowModalTask: Function;
}

interface TaskModalState {
    value: string;
}

export class TaskModal extends React.Component<TaskModalProps, TaskModalState> {
    constructor(props: TaskModalProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.saveTask = this.saveTask.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) {
            return 'success';
        } else if (length > 5) {
            return 'warning';
        } else if (length > 0) {
            return 'error';
        }
        return null;
    }

    handleChange(e: any) {
        this.setState({ value: e.target.value });
    }

    saveTask() {
        const variables = {
            task: this.state.value,
            todoListId: 'cjevh01zwyu0w0148vql4vrck'
        };

        request('https://api.graph.cool/simple/v1/cjeujoqgm10rw0151kql505uu', queryCreateTask, variables)
            .then((data) => () => this.props.setShowModalTask(false));
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
                                value={this.state.value}
                                placeholder="Enter text"
                                onChange={(e) => this.handleChange(e)}
                            />
                            <FormControl.Feedback />
                            <HelpBlock>Validation is based on string length.</HelpBlock>
                        </FormGroup>
                    </form></Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => this.props.setShowModalTask(false)}>Close</Button>
                        <Button bsStyle="primary" onClick={() => this.saveTask()}>Add Task</Button>
                    </Modal.Footer>
                </Modal >
            </div >
        );
    }
}