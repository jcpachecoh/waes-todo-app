import * as React from 'react';
import { Task } from '../Models/Task';
import { Glyphicon } from 'react-bootstrap';
import { request } from 'graphql-request';
import { graphcoolEndpoint } from '../constants/index';
import { queryDeleteTask, queryUpdateTask } from '../querys/index';

interface TaskPros {
    task: Task;
    refresh: Function;
    setShowModalConfirm: Function;
    showConfirmModal: boolean;
    updateTask: Function;
    setTask: Function;
}

export class TaskComponent extends React.Component<TaskPros, {}> {

    componentWillReceiveProps(nextProps: TaskPros) {
        console.log(nextProps);
    }
    setAsComplete(taskId: string, done: boolean) {
        let variables = {
            id: taskId,
            done: done
        };

        request(graphcoolEndpoint, queryUpdateTask, variables)
            .then((data) => {
                this.props.refresh();
            });
    }

    deleteTask(taskId: string) {
        let variables = {
            id: taskId
        };

        request(graphcoolEndpoint, queryDeleteTask, variables)
            .then((data) => {
                this.props.refresh();
                this.props.setShowModalConfirm(false);
            });
    }

    render() {
        let task = this.props.task;
        return (
            <div>
                <div className="todo-item">
                    <span className={(task.done) ? 'tasks-list-item-done' : 'tasks-list-item'}>
                        <input type="checkbox" checked={task.done} onChange={(e) => this.setAsComplete(task.id, e.target.checked)} />
                        <span className="checkmark" />
                        <b>{task.task}</b>
                        <span className="remove-task">
                            <Glyphicon glyph="remove" onClick={() => this.deleteTask(task.id)} />
                        </span>
                        <span className="update-task">
                            <Glyphicon glyph="edit" onClick={() => this.props.updateTask(task)} />
                        </span>
                    </span>
                </div>
            </div >
        );
    }

}