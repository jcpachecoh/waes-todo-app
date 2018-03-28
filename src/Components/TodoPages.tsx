import * as React from 'react';
import { ChildProps, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { TaskGQVariables } from '../Models/Task';
import { TodoPage } from '../Models/TodoPage';
import { Nav, NavItem } from 'react-bootstrap';
import AddTodoListContainer from '../Containers/AddTodoListContainer';
import { Dimmer, Loader } from 'semantic-ui-react';

export interface TodoPagesProps {
  setTodoPage: Function;
  showAddList: boolean;
  setShowAddList: Function;
}

interface TodoPagesState {
  loading: boolean;
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

class TodoPages extends React.Component<ChildProps<TodoPagesProps, Data>, TodoPagesState> {

  constructor(props?: TodoPagesProps, context?: any) {
    super(props);
    this.refresh = this.refresh.bind(this);

    this.state = {
      loading: false
    };
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
      <div className="left-menu" >
        <AddTodoListContainer refresh={() => this.refresh()} />
        <Nav bsStyle="pills" stacked={true}>
          {this.props.data.allTodoLists && this.props.data.allTodoLists.map((item: TodoPage, index: number) => {
            return <NavItem key={index} onClick={() => this.props.setTodoPage(item.id)}>{item.listname}</NavItem>;
          })}
        </Nav>
        {this.state.loading &&
          <Dimmer active={true} inverted={true}>
            <Loader>Loading</Loader>
          </Dimmer>
        }
      </div>
    );
  }
}

export const TodoPagesHOC = withTasks(TodoPages);
