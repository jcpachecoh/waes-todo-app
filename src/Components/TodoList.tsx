import * as React from 'react';
import { Task } from '../Models/Task';
import { Dimmer, Loader } from 'semantic-ui-react';
import TaskModalContainer from '../Containers/TaskModalContainer';
import { User } from '../Models/User';
import { TaskComponent } from './Task';
import { request } from 'graphql-request';
import { graphcoolEndpoint } from '../constants/index';

export interface TodoListProps {
  showAll: Function;
  showActive: Function;
  showCompleted: Function;
  setAsComplete: Function;
  pageId: string;
  showActiveFlag: boolean;
  user: User;
  showConfirmModal: boolean;
  setShowModalConfirm: Function;
  updateTask: Function;
  setTask: Function;
}

export interface TodoListState {
  loading: boolean;
  allTasks: Task[];
}

const ALL_TASKS_QUERY = `
  query allTasks(
    $done: Boolean!
    $todoListId: ID!
   ) {
    allTasks(filter: {
      todoList: {
        id: $todoListId
      }
      done: $done
    }){
        id
        task
        done
        createdAt
        updatedAt
      }
    }
`;

export class TodoList extends React.Component<TodoListProps, TodoListState> {

  constructor(props?: TodoListProps, context?: any) {
    super(props);
    this.refresh = this.refresh.bind(this);
    this.state = {
      loading: false,
      allTasks: []
    };
  }

  componentDidMount() {
    this.refresh();
  }

  componentWillReceiveProps(nextProps: TodoListProps) {
    this.setState({
      loading: true
    });
    let variables = {
      done: nextProps.showActiveFlag,
      todoListId: nextProps.pageId
    };
    request(graphcoolEndpoint, ALL_TASKS_QUERY, variables)
      .then((data: any) => {
        this.setState({
          allTasks: data.allTasks,
          loading: false
        });
      });
  }

  refresh() {
    this.setState({
      loading: true
    });
    let variables = {
      done: false,
      todoListId: this.props.pageId
    };
    request(graphcoolEndpoint, ALL_TASKS_QUERY, variables)
      .then((data: any) => {
        this.setState({
          allTasks: data.allTasks,
          loading: false
        });
      });
  }

  render() {
    return (
      <div className="main-panel">
        <TaskModalContainer refresh={() => this.refresh()} />
        <div className="tasks-lists">
          {this.state.allTasks && this.state.allTasks.map((item: Task, index: number) => {
            return <TaskComponent
              key={index}
              task={item}
              refresh={() => this.refresh()}
              showConfirmModal={this.props.showConfirmModal}
              setShowModalConfirm={(flag: boolean) => this.props.setShowModalConfirm(flag)}
              updateTask={() => this.props.updateTask(item)}
              setTask={() => this.props.setTask(item)}
            />;
          })}
        </div>
        {this.state.loading &&
          <Dimmer active={true} inverted={true}>
            <Loader>Loading</Loader>
          </Dimmer>
        }
      </div>
    );
  }
}