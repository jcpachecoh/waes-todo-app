import * as React from 'react';
import { ChildProps, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Task, TaskGQVariables } from '../Models/Task';

export interface TodoListProps {
  showAll: Function;
  showActive: Function;
  showCompleted: Function;
}

type Data = {
  allTasks: Task[];
};

const ALL_TASKS_QUERY = gql`
  query allTasks {
    allTasks {
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
    variables: new TaskGQVariables(),
  },
});

class TodoList extends React.Component<ChildProps<TodoListProps, Data>, {}> {

  render() {
    return (
      <div className="main-panel">
        {this.props.data.allTasks && this.props.data.allTasks.map((item: Task, index: number) => {
          return <h1 key={index}>{item.task}</h1>;
        })}
      </div>
    );
  }
}

export const TodoListHOC = withTasks(TodoList);
