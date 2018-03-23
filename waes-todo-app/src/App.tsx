import * as React from 'react';
import './css/app.css';
import TodoLayout from './Components/TodoLayout';
import LoginContainer from './Containers/LoginContainer';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
 
const history = createHistory();
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact={true} path="/" component={LoginContainer} />
          <Route exact={true} path="/todos" component={TodoLayout} />
        </div>
      </Router>
    );
  }
}

export default App;
