import * as React from 'react';
import { ChildProps, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { TaskGQVariables } from '../Models/Task';
import { TodoPage } from '../Models/TodoPage';
import { Nav, NavItem } from 'react-bootstrap';

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
       <Nav bsStyle="pills" stacked={true}>
        {this.props.data.allTodoLists && this.props.data.allTodoLists.map((item: TodoPage, index: number) => {
          return <NavItem key={index} onClick={() => this.props.setTodoPage(item.id)}>{item.listname}</NavItem>;
        })}
        </Nav>
      </div>
    );
  }
}

export const TodoPagesHOC = withTasks(TodoPages);
