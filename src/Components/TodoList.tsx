import * as React from 'react';
import { ChildProps, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Task, TaskGQVariables } from '../Models/Task';
import { Dimmer, Loader } from 'semantic-ui-react';
import TaskModalContainer from '../Containers/TaskModalContainer';
import { User } from '../Models/User';
import { TaskComponent } from './Task';

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
}

type Data = {
  allTasks: Task[];
};

const ALL_TASKS_QUERY = gql`
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

const withTasks = graphql<Data, TodoListProps>(ALL_TASKS_QUERY, {
  options: {
    variables: new TaskGQVariables()
  },
});

class TodoList extends React.Component<ChildProps<TodoListProps, Data>, TodoListState> {

  constructor(props?: TodoListProps, context?: any) {
    super(props);
    this.refresh = this.refresh.bind(this);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.refresh();
  }

  componentWillReceiveProps(nextProps: TodoListProps) {
    this.props.data.variables = Object.assign(this.props.data.variables, { todoListId: nextProps.pageId, done: nextProps.showActiveFlag });
    this.refresh();
  }

  refresh() {
    this.setState({
      loading: true
    });
    this.props.data.refetch(this.props.data.variables)
      .then((data) => {
        this.setState({
          loading: false
        });
      });
  }

  render() {
    return (
      <div className="main-panel">
        <TaskModalContainer refresh={() => this.refresh()} />
        <div className="tasks-lists">
          {this.props.data.allTasks && this.props.data.allTasks.map((item: Task, index: number) => {
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

export const TodoListHOC = withTasks(TodoList);
