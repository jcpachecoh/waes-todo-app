import * as React from 'react';
import { TodoPage } from '../Models/TodoPage';
import { Nav, NavItem } from 'react-bootstrap';
import AddTodoListContainer from '../Containers/AddTodoListContainer';
import { Dimmer, Loader } from 'semantic-ui-react';
import { graphcoolEndpoint } from '../constants/index';
import { request } from 'graphql-request';

export interface TodoPagesProps {
  setTodoPage: Function;
  showAddList: boolean;
  setShowAddList: Function;
}

interface TodoPagesState {
  loading: boolean;
  allTodoLists: TodoPage[];
}

const ALL_PAGES_QUERY = `
  query allTodoLists {
    allTodoLists {
        id
        listname
        createdAt
        updatedAt
      }
    }
`;

export class TodoPages extends React.Component<TodoPagesProps, TodoPagesState> {

  constructor(props?: TodoPagesProps, context?: any) {
    super(props);
    this.refresh = this.refresh.bind(this);

    this.state = {
      loading: false,
      allTodoLists: []
    };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    this.setState({
      loading: true
    });

    request(graphcoolEndpoint, ALL_PAGES_QUERY)
      .then((data: any) => {
        this.setState({
          loading: false,
          allTodoLists: data.allTodoLists
        });
      });
  }

  render() {
    return (
      <div className="left-menu" >
        <AddTodoListContainer refresh={() => this.refresh()} />
        <Nav bsStyle="pills" stacked={true}>
          {this.state.allTodoLists && this.state.allTodoLists.map((item: TodoPage, index: number) => {
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
