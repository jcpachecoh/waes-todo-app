import * as React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { messages } from '../constants/index';
import { Task } from '../Models/Task';

interface ModalConfirmProps {
    showConfirm: boolean;
    setShowModalConfirm: Function;
    task: Task;
    deleteTask: Function;
}

export class ModalConfirm extends React.Component<ModalConfirmProps, {}> {
    render() {
        return (
            <div className="static-modal">
                <Modal show={this.props.showConfirm} onHide={() => this.props.setShowModalConfirm(false)}>
                    <Modal.Header>
                        <Modal.Title>Confirmation Modal</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>{messages.confirmDelete} <b>{this.props.task.task} ?</b></Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => this.props.setShowModalConfirm(false)}>Close</Button>
                        <Button bsStyle="primary" onClick={() => this.props.deleteTask(this.props.task.id)}> Confirm</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }
}
