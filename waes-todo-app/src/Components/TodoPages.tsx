import * as React from 'react';
import { ChildProps, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { TaskGQVariables } from '../Models/Task';
import { TodoPage } from '../Models/TodoPage';

export interface TodoPagesProps {
  setTodoPage: Function;
}

type Data = {
    allTodoLists: TodoPage[];
};

const ALL_PAGES_QUERY = gql`
  query allTodoLists {
    allTodoLists {
        id
        listname
        createdAt
        updatedAt
      }
    }
`;

const withTasks = graphql<Data, TodoPagesProps>(ALL_PAGES_QUERY, {
  options: {
    variables: new TaskGQVariables(),
  },
});

class TodoPages extends React.Component<ChildProps<TodoPagesProps, Data>, {}> {

  render() {
    return (
      <div className="left-menu" >
        {this.props.data.allTodoLists && this.props.data.allTodoLists.map((item: TodoPage, index: number) => {
          return <h3 key={index}>{item.listname}</h3>;
        })}
      </div>
    );
  }
}

export const TodoPagesHOC = withTasks(TodoPages);
