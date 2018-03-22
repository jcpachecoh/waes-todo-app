import * as React from 'react';
import { ChildProps, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Task, TaskGQVariables } from '../Models/Task';
import { queryUpdateTask } from '../querys/index';
import { request } from 'graphql-request';
import { Dimmer, Loader } from 'semantic-ui-react';

export interface TodoListProps {
  showAll: Function;
  showActive: Function;
  showCompleted: Function;
  setAsComplete: Function;
  pageId: string;
  showActiveFlag: boolean;
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
   ) {
    allTasks(filter: {
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

  constructor(props: TodoListProps) {
    super(props);
    this.refresh = this.refresh.bind(this);
    this.setAsComplete = this.setAsComplete.bind(this);

    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.refresh();
  }

  componentWillReceiveProps(nextProps: TodoListProps) {
    this.props.data.variables = Object.assign(this.props.data.variables, { done: nextProps.showActiveFlag });
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

  setAsComplete(taskId: string, done: boolean) {
    let variables = {
      id: taskId,
      done: done
    };

    request('https://api.graph.cool/simple/v1/cjeujoqgm10rw0151kql505uu', queryUpdateTask, variables)
      .then((data) => {
        this.refresh();
      });
  }
  render() {
    return (
      <div className="main-panel">
        <fieldset className="tasks-lists">
          {this.props.data.allTasks && this.props.data.allTasks.map((item: Task, index: number) => {
            return <label key={index} className={(item.done) ? 'tasks-list-item-done' : 'tasks-list-item'}>
              {!item.done &&
                <input type="checkbox" onChange={(e) => this.setAsComplete(item.id, e.target.checked)} className="tasks-list-cb" />
              }
              <span className="tasks-list-mark" />
              <span className="tasks-list-desc">{item.task}</span>
            </label>;
          })}
        </fieldset>
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
